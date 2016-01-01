# koa-request-xhr
This middleware simply sets a `xhr` boolean on the koa's [`ctx.state`](https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxstate) namespace.

This aims to be the equivalent of [Express `req.xhr`](http://expressjs.com/api.html#req.xhr)

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
  if (this.state.xhr) {
    this.body = { message: 'Hello World' };
  } else {
    this.body = 'Hello World';
  }
});

app.listen(3000);
```
