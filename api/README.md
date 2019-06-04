# api

> Node Express Framework API for EducateMe client

## Set api base URL
open *config.json* and enter your database connection string and a random secret for JWT token.

## Build

``` bash
#For development install dev dependencies
npm install --production=false

#For production install prod dependencies:
npm install --production=true

# serve at port 4000
node ./server.js
```

## Build production image with docker

Execute:
```
docker build .
```