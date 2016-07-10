# from-family

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][npm-img]][npm]

Checks the family of a HTTP status code.

[build]:               https://travis-ci.org/tallesl/node-from-family
[build-img]:           https://travis-ci.org/tallesl/node-from-family.svg
[coverage]:            https://coveralls.io/r/tallesl/node-from-family?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-from-family/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-from-family
[dependencies-img]:    https://david-dm.org/tallesl/node-from-family.svg
[devdependencies]:     https://david-dm.org/tallesl/node-from-family#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/node-from-family/dev-status.svg
[npm]:                 http://badge.fury.io/js/from-family
[npm-img]:             https://badge.fury.io/js/from-family.svg

## Usage

```
$ npm install from-family
(...)
$ node
> var fromFamily = require('from-family')
undefined
> fromFamily.success(201)     // 201 (Created) is from "Success" family
true
> fromFamily.clientError(res) // It also reads response's 'statusCode'
false
```
