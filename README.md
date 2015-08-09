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

* `fromFamily.information` checks if the given status is [100 or *100 and something*][100];
* `fromFamily.success` checks if the given status is [200 or *200 and something*][200];
* `fromFamily.redirection` checks if the given status is [300 or *300 and something*][300];
* `fromFamily.clientError` checks if the given status is [400 or *400 and something*][400];
* `fromFamily.serverError` checks if the given status is [500 or *500 and something*][500].

[100]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_Informational
[200]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success
[300]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection
[400]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error
[500]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_Error


```js
$ npm install from-family
from-family@1.1.0 node_modules/from-family
$ node
> var fromFamily = require('from-family')
undefined
> fromFamily.success(201)     // 201 (Created) is from "Success" family
true
> fromFamily.clientError(res) // It also reads response's 'statusCode'
false
```

