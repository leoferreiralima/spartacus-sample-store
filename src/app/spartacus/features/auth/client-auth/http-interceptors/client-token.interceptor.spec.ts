import { HTTP_INTERCEPTORS, HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ClientTokenInterceptor } from './client-token.interceptor';
import { BaseOccUrlProperties, ClientErrorHandlingService, ClientToken, ClientTokenService, OccEndpointsService, USE_CLIENT_TOKEN } from '@spartacus/core';
import { Observable, of } from 'rxjs';

class MockClientTokenService implements Partial<ClientTokenService> {
  getClientToken(): Observable<ClientToken | undefined> {
    return of({
      access_token: 'access_token',
      expires_in: 3600,
      scope: 'scope',
      token_type: 'Bearer'
    })
  }
}

class MockClientErrorHandlingService implements Partial<ClientErrorHandlingService> {
  handleExpiredClientToken(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return of();
  }
}

class MockOccEndpointsService implements Partial<OccEndpointsService> {
  getBaseUrl(baseUrlProperties?: BaseOccUrlProperties | undefined): string {
    return '/test'
  }
}

describe('ClientTokenInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let clientTokenService: ClientTokenService;
  let clientErrorHandlingService: ClientErrorHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ClientTokenService, useClass: MockClientTokenService },
        { provide: ClientErrorHandlingService, useClass: MockClientErrorHandlingService },
        { provide: OccEndpointsService, useClass: MockOccEndpointsService },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ClientTokenInterceptor,
          multi: true,
        },
      ]
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    clientTokenService = TestBed.inject(ClientTokenService);
    clientErrorHandlingService = TestBed.inject(ClientErrorHandlingService);
  });

  it('should not be a client token request', () => {
    http.get('/test').subscribe().unsubscribe();

    const { request } = httpMock.expectOne('/test');

    expect(request.headers.get('Authorization')).toBeFalsy();
  });

  it('should be a client token request', () => {
    http.get('/test', {
      headers: {
        [USE_CLIENT_TOKEN]: "true"
      }
    }).subscribe()
      .unsubscribe();

    const { request } = httpMock.expectOne('/test');

    expect(request.headers.get(USE_CLIENT_TOKEN)).toBeFalsy();
    expect(request.headers.get('Authorization')).toBe("Bearer access_token");
  });

  it('should set authorization header with TestType token type', () => {

    spyOn(clientTokenService, 'getClientToken').and.returnValue(
      of({
        access_token: 'access_token',
        expires_in: 3600,
        scope: 'scope',
        token_type: 'TestType'
      })
    );

    http.get('/test', {
      headers: {
        [USE_CLIENT_TOKEN]: "true"
      }
    }).subscribe()
      .unsubscribe();

    const { request } = httpMock.expectOne('/test');

    expect(request.headers.get(USE_CLIENT_TOKEN)).toBeFalsy();
    expect(request.headers.get('Authorization')).toBe("TestType access_token");
  });

  it('should not set authorization header when request url dont match occ base url', () => {

    http.get('/otherurl', {
      headers: {
        [USE_CLIENT_TOKEN]: "true"
      }
    }).subscribe()
      .unsubscribe();

    const { request } = httpMock.expectOne('/otherurl');

    expect(request.headers.get(USE_CLIENT_TOKEN)).toBeFalsy();
    expect(request.headers.get('Authorization')).toBeFalsy();
  });

  it('should not set authorization header when token is undefined', () => {

    spyOn(clientTokenService, 'getClientToken').and.returnValue(
      of(undefined)
    );

    http.get('/test', {
      headers: {
        [USE_CLIENT_TOKEN]: "true"
      }
    }).subscribe()
      .unsubscribe();

    const { request } = httpMock.expectOne('/test');

    expect(request.headers.get(USE_CLIENT_TOKEN)).toBeFalsy();
    expect(request.headers.get('Authorization')).toBeFalsy();
  });

  it('should handle expired client token error', ()=> {
    spyOn(
      clientErrorHandlingService,
      'handleExpiredClientToken'
    ).and.callThrough();

    http.get('/test', {
      headers: {
        [USE_CLIENT_TOKEN]: "true"
      }
    }).subscribe();

    const mockReq = httpMock.expectOne('/test');

    mockReq.flush(
      {
        errors: [
          {
            type: 'InvalidTokenError',
            message: 'Invalid access token: some token',
          },
        ],
      },
      { status: 401, statusText: 'Unauthorized'}
    );

    expect(clientErrorHandlingService.handleExpiredClientToken)
      .toHaveBeenCalled();
  });

});
