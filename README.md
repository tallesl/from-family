# From Family

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][module-img]][module]

[![][npm]][npm]

[build]:     https://travis-ci.org/tallesl/from-family
[build-img]: https://travis-ci.org/tallesl/from-family.png

[coverage]:     https://coveralls.io/r/tallesl/from-family?branch=master
[coverage-img]: https://coveralls.io/repos/tallesl/from-family/badge.png?branch=master

[dependencies]:     https://david-dm.org/tallesl/from-family
[dependencies-img]: https://david-dm.org/tallesl/from-family.png

[devdependencies]:     https://david-dm.org/tallesl/from-family#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/from-family/dev-status.png

[module]:     http://badge.fury.io/js/from-family
[module-img]: https://badge.fury.io/js/from-family.png

[npm]:     https://nodei.co/npm/from-family
[npm-img]: https://nodei.co/npm/from-family.png?mini=true

Checks the family of a HTTP status code.

## Usage

```js
$ npm install from-family
from-family@1.0.1 node_modules/from-family
$ node
> var fromFamily = require('from-family')
undefined
> fromFamily.success(201) // 201 (Created) is from "Success" family
true
> fromFamily.clientError(301) // 301 (Found) is from "Redirection" family
false
```

