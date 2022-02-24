# Listingslab Version 19

## Higher Order Framework

#### Lerna monorepo

https://lerna.js.org

[Lerna](https://github.com/lerna/lerna) is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

#### Single SPA

[single-spa.js](https://single-spa.js.org) is an Open Source framework for bringing together multiple JavaScript microfrontends in a frontend application. Architecting your frontend using single-spa enables many benefits, such as:

- Use multiple frameworks on the same page without page refreshing (React, AngularJS, Angular, Ember, or whatever you're using)
- Deploy your microfrontends independently
- Write code using a new framework, without rewriting your existing app
- Lazy load code for improved initial load time

#### Architecture

single-spa takes inspiration from modern framework component lifecycles by abstracting lifecycles for entire applications. Born out of Canopy's desire to use React + react-router instead of being forever stuck with our AngularJS + ui-router application, single-spa is now a mature library that enables frontend microservices architecture aka "microfrontends". Microfrontends enable many benefits such as independent deployments, migration and experimentation, and resilient applications.

single-spa apps consist of the following:

1. A single-spa root config, which renders the HTML page and the JavaScript that registers applications. Each application is registered with three things:

- A name
- A function to load the application's code
- A function that determines when the application is active/inactive

2. Applications which can be thought of as single-page applications packaged up into modules. Each application must know how to bootstrap, mount, and unmount itself from the DOM. The main difference between a traditional SPA and single-spa applications is that they must be able to coexist with other applications as they do not each have their own HTML page.

For example, your React or Angular SPAs are applications. When active, they can listen to url routing events and put content on the DOM. When inactive, they do not listen to url routing events and are totally removed from the DOM.

#### Recommended single-spa Setup

The single-spa core team has put together documentation, tools, and videos showing the currently encouraged best practices with single-spa. Check out [these docs](https://single-spa.js.org/docs/recommended-setup/) for more information.

#### Resources

- https://micro-frontends.org Understand more about the concept
- [single-spa.js.org](https://single-spa.js.org)
- https://single-spa.js.org/docs/getting-started-overview

#### CLI tools
```
npx create-single-spa
npx create-react-app ./packages/microfrontend --template redux-typescript
```

#### Isn't single-spa sort of a redundant name?

Yep.

#### Keywords

single-spa, microfrontend, open source,



