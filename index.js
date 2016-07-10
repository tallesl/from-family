'use strict'

exports.informational = function (code) { return check(code, 100) }
exports.success = function (code) { return check(code, 200) }
exports.redirection = function (code) { return check(code, 300) }
exports.clientError = function (code) { return check(code, 400) }
exports.serverError = function (code) { return check(code, 500) }

function check (code, family) {
  // if you didn't gave us anything we do nothing
  if (!code) return false

  // we read 'statusCode' (because response objects)
  if (typeof code === 'object' && 'statusCode' in code) code = code.statusCode

  // we also take strings
  if (typeof code === 'string') code = parseInt(code)

  // returns if it's an integer and it's in the family range
  return Number.isInteger(code) && code >= family && code < (family + 100)
}
