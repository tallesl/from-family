var assert     = require('assert')
  , fromFamily = require('../lib/from-family')

it('1xx Informational', function () {

  // 100 (Continue)
  assert.equal(fromFamily.informational( 100 ), true)
  assert.equal(fromFamily.informational('100'), true)

  // 101 (Switching Protocols)
  assert.equal(fromFamily.informational( 101 ), true)
  assert.equal(fromFamily.informational('100'), true)

  // 201 (Created)
  assert.equal(fromFamily.informational( 201 ), false)
  assert.equal(fromFamily.informational('201'), false)

  // 302 (Found)
  assert.equal(fromFamily.informational( 302 ), false)
  assert.equal(fromFamily.informational('302'), false)

  // 403 (Forbidden)
  assert.equal(fromFamily.informational( 403 ), false)
  assert.equal(fromFamily.informational('403'), false)

  // 504 (Gateway Timeout)
  assert.equal(fromFamily.informational( 504 ), false)
  assert.equal(fromFamily.informational('504'), false)

})

it('2xx Success', function () {

  // 100 (Continue)
  assert.equal(fromFamily.success( 100 ), false)
  assert.equal(fromFamily.success('100'), false)

  // 200 (OK)
  assert.equal(fromFamily.success( 200 ), true)
  assert.equal(fromFamily.success('200'), true)

  // 201 (Created)
  assert.equal(fromFamily.success( 201 ), true)
  assert.equal(fromFamily.success('201'), true)

  // 202 (Accepted)
  assert.equal(fromFamily.success( 202 ), true)
  assert.equal(fromFamily.success('202'), true)

  // 203 (Non-Authoritative Information)
  assert.equal(fromFamily.success( 203 ), true)
  assert.equal(fromFamily.success('203'), true)

  // 204 (No Content)
  assert.equal(fromFamily.success( 204 ), true)
  assert.equal(fromFamily.success('204'), true)

  // 205 (Reset Content)
  assert.equal(fromFamily.success( 205 ), true)
  assert.equal(fromFamily.success('205'), true)

  // 206 (Partial Content)
  assert.equal(fromFamily.success( 206 ), true)
  assert.equal(fromFamily.success('206'), true)

  // 302 (Found)
  assert.equal(fromFamily.success( 302 ), false)
  assert.equal(fromFamily.success('302'), false)

  // 403 (Forbidden)
  assert.equal(fromFamily.success( 403 ), false)
  assert.equal(fromFamily.success('403'), false)

  // 504 (Gateway Timeout)
  assert.equal(fromFamily.success( 504 ), false)
  assert.equal(fromFamily.success('504'), false)

})

it('3xx Redirection', function () {

  // 100 (Continue)
  assert.equal(fromFamily.redirection( 100 ), false)
  assert.equal(fromFamily.redirection('100'), false)

  // 201 (Created)
  assert.equal(fromFamily.redirection( 201 ), false)
  assert.equal(fromFamily.redirection('201'), false)

  // 300 (Multiple Choices)
  assert.equal(fromFamily.redirection( 300 ), true)
  assert.equal(fromFamily.redirection('300'), true)

  // 302 (Found)
  assert.equal(fromFamily.redirection( 301 ), true)
  assert.equal(fromFamily.redirection('301'), true)

  // 302 (Found)
  assert.equal(fromFamily.redirection( 302 ), true)
  assert.equal(fromFamily.redirection('302'), true)

  // 303 (See Other)
  assert.equal(fromFamily.redirection( 303 ), true)
  assert.equal(fromFamily.redirection('303'), true)

  // 304 (Not Modified)
  assert.equal(fromFamily.redirection( 304 ), true)
  assert.equal(fromFamily.redirection('304'), true)

  // 305 (Use Proxy)
  assert.equal(fromFamily.redirection( 305 ), true)
  assert.equal(fromFamily.redirection('305'), true)

  // 307 (Temporary Redirect)
  assert.equal(fromFamily.redirection( 307 ), true)
  assert.equal(fromFamily.redirection('307'), true)

  // 403 (Forbidden)
  assert.equal(fromFamily.redirection( 403 ), false)
  assert.equal(fromFamily.redirection('403'), false)

  // 504 (Gateway Timeout)
  assert.equal(fromFamily.redirection( 504 ), false)
  assert.equal(fromFamily.redirection('504'), false)

})

it('4xx Client Error', function () {

  // 100 (Continue)
  assert.equal(fromFamily.clientError( 100 ), false)
  assert.equal(fromFamily.clientError('100'), false)

  // 201 (Created)
  assert.equal(fromFamily.clientError( 201 ), false)
  assert.equal(fromFamily.clientError('201'), false)

  // 302 (Found)
  assert.equal(fromFamily.clientError( 302 ), false)
  assert.equal(fromFamily.clientError('302'), false)

  // 400 (Bad Request)
  assert.equal(fromFamily.clientError( 400 ), true)
  assert.equal(fromFamily.clientError('400'), true)

  // 401 (Unauthorized)
  assert.equal(fromFamily.clientError( 401 ), true)
  assert.equal(fromFamily.clientError('401'), true)

  // 402 (Payment Required)
  assert.equal(fromFamily.clientError( 402 ), true)
  assert.equal(fromFamily.clientError('402'), true)

  // 403 (Forbidden)
  assert.equal(fromFamily.clientError( 403 ), true)
  assert.equal(fromFamily.clientError('403'), true)

  // 404 (Not Found)
  assert.equal(fromFamily.clientError( 404 ), true)
  assert.equal(fromFamily.clientError('404'), true)

  // 405 (Method Not Allowed)
  assert.equal(fromFamily.clientError( 405 ), true)
  assert.equal(fromFamily.clientError('405'), true)

  // 406 (Not Acceptable)
  assert.equal(fromFamily.clientError( 406 ), true)
  assert.equal(fromFamily.clientError('406'), true)

  // 407 (Proxy Authentication Required)
  assert.equal(fromFamily.clientError( 407 ), true)
  assert.equal(fromFamily.clientError('407'), true)

  // 408 (Request Timeout)
  assert.equal(fromFamily.clientError( 408 ), true)
  assert.equal(fromFamily.clientError('408'), true)

  // 409 (Conflict)
  assert.equal(fromFamily.clientError( 409 ), true)
  assert.equal(fromFamily.clientError('409'), true)

  // 410 (Gone)
  assert.equal(fromFamily.clientError( 410 ), true)
  assert.equal(fromFamily.clientError('410'), true)

  // 411 (Length Required)
  assert.equal(fromFamily.clientError( 411 ), true)
  assert.equal(fromFamily.clientError('411'), true)

  // 412 (Precondition Failed)
  assert.equal(fromFamily.clientError( 412 ), true)
  assert.equal(fromFamily.clientError('412'), true)

  // 413 (Payload Too Large)
  assert.equal(fromFamily.clientError( 413 ), true)
  assert.equal(fromFamily.clientError('413'), true)

  // 414 (URI Too Long)
  assert.equal(fromFamily.clientError( 414 ), true)
  assert.equal(fromFamily.clientError('414'), true)

  // 415 (Unsupported Media Type)
  assert.equal(fromFamily.clientError( 415 ), true)
  assert.equal(fromFamily.clientError('415'), true)

  // 416 (Range Not Satisfiable)
  assert.equal(fromFamily.clientError( 416 ), true)
  assert.equal(fromFamily.clientError('416'), true)

  // 417 (Expecatation Failed)
  assert.equal(fromFamily.clientError( 417 ), true)
  assert.equal(fromFamily.clientError('417'), true)

  // 426 (Upgrade Required)
  assert.equal(fromFamily.clientError( 426 ), true)
  assert.equal(fromFamily.clientError('426'), true)

  // 504 (Gateway Timeout)
  assert.equal(fromFamily.clientError( 504 ), false)
  assert.equal(fromFamily.clientError('504'), false)

})

it('5xx Server Error', function () {

  // 100 (Continue)
  assert.equal(fromFamily.serverError( 100 ), false)
  assert.equal(fromFamily.serverError('100'), false)

  // 201 (Created)
  assert.equal(fromFamily.serverError( 201 ), false)
  assert.equal(fromFamily.serverError('201'), false)

  // 302 (Found)
  assert.equal(fromFamily.serverError( 302 ), false)
  assert.equal(fromFamily.serverError('302'), false)

  // 403 (Forbidden)
  assert.equal(fromFamily.serverError( 403 ), false)
  assert.equal(fromFamily.serverError('403'), false)

  // 500 (Internal Server Error)
  assert.equal(fromFamily.serverError( 500 ), true)
  assert.equal(fromFamily.serverError('500'), true)

  // 502 (Bad Gateway)
  assert.equal(fromFamily.serverError( 502 ), true)
  assert.equal(fromFamily.serverError('502'), true)

  // 503 (Service Unavailable)
  assert.equal(fromFamily.serverError( 503 ), true)
  assert.equal(fromFamily.serverError('503'), true)

  // 504 (Gateway Timeout)
  assert.equal(fromFamily.serverError( 504 ), true)
  assert.equal(fromFamily.serverError('504'), true)

  // 505 (HTTP Version Not Supported)
  assert.equal(fromFamily.serverError( 505 ), true)
  assert.equal(fromFamily.serverError('505'), true)

})

it('response\'s \'statusCode\'', function () {

  assert.equal(fromFamily.success({ statusCode: 200 }), true)

})

it('random things', function () {

  assert.equal(fromFamily.informational(),                false)
  assert.equal(fromFamily.informational(800),             false)
  assert.equal(fromFamily.informational(NaN),             false)
  assert.equal(fromFamily.informational(/ /),             false)
  assert.equal(fromFamily.informational(true),            false)
  assert.equal(fromFamily.informational(-200),            false)
  assert.equal(fromFamily.informational(200.1),           false)
  assert.equal(fromFamily.informational('foo'),           false)
  assert.equal(fromFamily.informational(new Date()),      false)
  assert.equal(fromFamily.informational(function () { }), false)

})

