# client

> A Vue.js project

## Set api base URL
open *src/config.json* and enter your api base URL

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Deploy on Production

copy *index.html* and *dist/* folder to your webroot

Always serve index.html for any request
Example nginx configuration:
```
    location / {
        root {{app_root}}/dist;
        try_files $uri /index.html;
    }
```