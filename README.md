# smilecar
This repository is based on the Happycar coding challange. From the given challanges I chose to complete the frontend task including some backend elements.
This provided me with the opportunity to try a monorepo. Therefore, in this project I build a repository including the UI and API part written in Typescript, React, Express and Infersify...

## Development

### Run standalone

> Install the dependencies first: `yarn install`

1. Run `yarn start`
2. Happy coding 🚀

### Tests

- Unit tests: run `yarn test`

## Intro

Smilecar is the result of the coding challange from HAPPYCAR.

It renders an overview of all available rental car offers based on an API who return a mocked dataset.

## Technology

Smilecar consits of two diferent packages in a lerna monorepo.

### Smilecar-api ➡️ "the host"

[Smilecar-api](packages/smilecar-api/README.md)

**Language + Tech:**

- Express + TypeScript

**Purpose:**

- holds mocked data
- filters the dataset by rating average

### Smilecar-ui ➡️ "the frontend"

[Smilecar-api](packages/smilecar-ui/README.md)

**Language + Tech:**

- React + TypeScript
- SPA (single page application)
- Display an offer overview with basic information
- Handle filter functionions
