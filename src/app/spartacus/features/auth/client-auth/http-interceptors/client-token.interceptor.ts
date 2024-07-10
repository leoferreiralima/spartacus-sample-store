import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClientTokenService, ClientErrorHandlingService, OccEndpointsService, InterceptorUtil, USE_CLIENT_TOKEN, ClientToken } from "@spartacus/core";

import { Observable, throwError, of } from "rxjs";
import { catchError, switchMap, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClientTokenInterceptor implements HttpInterceptor {
  constructor(
    protected clientTokenService: ClientTokenService,
    protected clientErrorHandlingService: ClientErrorHandlingService,
    protected occEndpoints: OccEndpointsService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const isClientTokenRequest = this.isClientTokenRequest(request);
    if (isClientTokenRequest) {
      request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
    }

    return this.getClientToken(isClientTokenRequest).pipe(
      take(1),
      switchMap((token: ClientToken | undefined) => {
        if (
          token?.access_token &&
          request.url.includes(this.occEndpoints.getBaseUrl())
        ) {
          request = request.clone({
            setHeaders: {
              Authorization: `${token.token_type || 'Bearer'} ${
                token.access_token
              }`,
            },
          });
        }

        return next.handle(request).pipe(
          catchError((errResponse: any) => {
            if (
              errResponse instanceof HttpErrorResponse &&
              errResponse.status === 401 &&
              isClientTokenRequest &&
              this.isExpiredToken(errResponse)
            ) {
              return this.clientErrorHandlingService.handleExpiredClientToken(
                request,
                next
              );
            }
            return throwError(errResponse);
          })
        );
      })
    );
  }

  protected getClientToken(
    isClientTokenRequest: boolean
  ): Observable<ClientToken | undefined> {
    if (isClientTokenRequest) {
      return this.clientTokenService.getClientToken();
    }
    return of(undefined);
  }

  protected isClientTokenRequest(request: HttpRequest<any>): boolean {
    const isRequestMapping = InterceptorUtil.getInterceptorParam(
      USE_CLIENT_TOKEN,
      request.headers
    );
    return Boolean(isRequestMapping);
  }

  protected isExpiredToken(resp: HttpErrorResponse): boolean {
    return resp.error?.errors?.[0]?.type === 'InvalidTokenError';
  }
}
