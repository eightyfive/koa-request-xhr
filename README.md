# koa-request-xhr
This middleware simply sets a `xhr` boolean on the koa request.

## Installation

```
$ npm install koa-request-xhr --save
```

## Example

```js
var koa = require('koa');
var xhr = require('koa-request-xhr');
var app = koa();

app.use(xhr());
app.use(function *(){  
  if (this.request.xhr) {
    this.body = { message: 'Hello World' };
  } else {
    this.body = 'Hello World';
  }
});

app.listen(3000);
```