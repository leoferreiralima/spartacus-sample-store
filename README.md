# SampleStore

This is a sample store project with spartacus for study porpuses

## Setup

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
