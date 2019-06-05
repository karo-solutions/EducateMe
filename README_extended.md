
This README will explain the project structure and some code details, as wished in our group exercise.

# Overall Structure

Basically this project consists of two separate applications. The client application is written in Vue.js and all its logic is executed by the requesting browser. Vue.js provides the folder *dist/* which contains a minified *build.js* file and assets. To host the client application only this *dist/* folder and the index.html must be provided by a webserver.

To handle the client session and storing users and test results the application connects to an api. The api is written in node using the express framework. It can be hosted on a different server and is completly separated from the client application. For storing users and test results a mongoDB is used.

For further development or build details please see the  README.md's in the appropriate project folders.

# Client

## Folderstructure and File explaination
```
client
│   .babelrc
│   .editorconfig
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   webpack.config.js
│
└───src
    │   App.vue
    │   config.json
    │   main.js
    │   store.js
    │
    ├───assets
    │       practice.jpg
    │       [other jpg's]
    │
    └───components
            Home.vue
            [other vue's]

```

### *client/*

This folder contains configuration files for building (webpack.config.js) and managing the project (.bablrc, .gitignore..).

**package.json** defines the necessary nodejs dependencies.

**index.html** Every request will be routed to this file by the webserver. Vue.js then decides which component should be output by the browser.

### *client/src*

**config.json** Defines the api base URL.

**main.js** This file can be considered as the entry point of the application. it imports necessary npm packages and vue components. Furthermore it creates a Vue instance and mounts *App.vue* to

> \<div id="app">

of the previously explained index.html.

**App.vue** This file defines the basic structure of the client application. Since the navigationbar should be available on every site it is defined here.
Furthermore the
> \<router-view>

defines where all other components should be integrated on the appropriate link.

**store.js** In this file vuex is configured. It helps us to store a global state which is available from every vue component. Every vue component is able to get the current logged in user, the API Token and even can determine what went wrong at e.g. login (in which state is the program).


### *client/src/assets*
Contains stored assets.

### *client/src/components*
As mentioned before, in this folder all components and its logic are stored. 

E.g.: If the User connects to the site */teach* the vue rourter implements the component **Teach.vue** to the html tag \<router-link> found in **App.vue**.


## Nesting
The different components are nested as visualized here:

> index.html  -> App.vue  -> [ComponentName].vue

So if somebody connects to the application to *https://[mydomain]/teach* the following happens:

1. **index.html** provides html head. Includes done in *main.js* (e.g. Bootstrap) will be appended to the head tag. The \<div id="app"> will be overwritten by **App.vue**

2. HTML Content of **App.vue** will be included into **index.html**. Everything which should be showen on every site (e.g. Navigationbar) is included here. Furthermore the \<router-view> tag includes the appropriate component.

3. **[ComponentName].vue** If the User connects to the site */teach* the vue rourter implements the component *Teach.vue* to the html tag \<router-link> found in *App.vue*.

# API

## Folderstructure and File explaination


```
api
│   config.json
│   Dockerfile
│   package-lock.json
│   package.json
│   README.md
│   server.js
│
├───tests
│       test.controller.js
│       test.model.js
│       test.service.js
│
├───users
│       user.controller.js
│       user.model.js
│       user.service.js
│
└───_helpers
        db.js
        error-handler.js
        jwt.js
```

### *api/*

This folder contains configuration files for building and managing the project.

**package.json** defines the necessary nodejs dependencies.

**Dockerfile** is for building a production docker image.

**server.js** Is the entry point of the application. It imports all necessary npm packages and configures them.

**config.json** For defining the database connection string and a random secret for JWT token.

### *api/_helpers*

**db.js** connects to the mongoDB and creates necessary collection models and the database itself.


**error-handler.js** Handles different erros and creates error messages.

**jwt.js** uses the NPM package "express-jwt" which is responsible for handling JWT token. The function *jwt()* creates an instance of express jwt and defines which api calls are allowed without authentication.

### *api/tests* and *api/users*

***.controller.js** this file handles routes and executes the appropriate function in ***.service.js**. Furthermore it response the returned value of the service function to the client.

***.service.js** The Service writes and reads data from the database. The functions return requested data by the ***.controller.js**

***.model.js** In this file the database models are defined.