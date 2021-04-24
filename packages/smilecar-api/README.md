# smilecar-api

This API is responsible for providing offer information sorted by rating average. 

## Development

### Run standalone

> Install the dependencies first: `yarn install`

1. Run `yarn start`
2. Happy coding 🚀

### Tests

- Unit tests: run `yarn test`


### Technology

####  important packages

|   Package name     | Description |
| :-----------: | :--------------------------------------------------------------------------------------------------------------------------------- |
|  [expressjs](https://github.com/expressjs/express) | Used as server framework |
|  [inversify](https://github.com/inversify/InversifyJS)  | A lightweight and easy to use inversion of control container |
|  [pino](https://github.com/pinojs/pino)  | A low overhead logging framework |


#### Architecture

In the past I heard a lot of the "Clean Architecture" pattern by Uncle Bob and I thought it would be a good idea to test this pattern in your coding challenge.
I had to make some changes throughout the data flow to implement this pattern into JavaScript. But I think it is possible and can be used in the future. Yey!

![mobx stores](./docs/assets/clean_architecure.png)

    .
    ├── ...
    ├── src
    │   ├── controller              # All controllers for each route (handles all requests)
    │   ├── DI                      # Inversify Dependency Injection
    │   ├── domain                  # All buisines specific functions (Interactors, Interfaces)
    │   ├── infrastructure          # All serverframework (express) specific files and flows
    │   │   ├── routes              # Route definitions
    │   │   └── server              # Express server files
    │   └── services                # Services who loads the required data and bring them to the specific structure (Interface in domain)
    └── ...
