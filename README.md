# SampleStore

This is a sample store project with spartacus for study porpuses

## Setup

### Prerequisites

- **Angular CLI**: Version **15.2.4** is the minimum required. The most recent **15.x version is strongly recommended**. Version 16 and higher is not supported.

- **Node.js**: Version **16.13.0** or a newer **16.x** version, or else version **18.10.0** or a newer **18.x** version. Node.js 14.20 and newer 14.x versions are supported by Angular 15, but are no longer supported by SAP Commerce Cloud hosting services.

- **Npm**: Version **8.0** or newer.

### Running Verdaccio

The first step is run the verdaccio fake npm registry

```bash
npm run verdaccio
```

This is need because new versions of spartacus need a sap account to access or be builded from source.

### Install and Run

The next step is intall the dependencies, open a new terminal and run the following command

```bash
npm i
```

After This you can run `npm run start` or `npm run dev:ssr` to start the project

## Sites

After run the project acces any of the following sites:

- [Powertools (B2B)](http://localhost:9002/powertools-spa)
- [Apparel UK (B2C)](http://localhost:9002/apparel-uk-spa)
- [Electronics (B2C)](http://localhost:9002/electronics-spa)
