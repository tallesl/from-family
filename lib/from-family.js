var isInteger = require('is-integer')

exports.informational = function (code) { return check(code, 100) }
exports.success       = function (code) { return check(code, 200) }
exports.redirection   = function (code) { return check(code, 300) }
exports.clientError   = function (code) { return check(code, 400) }
exports.serverError   = function (code) { return check(code, 500) }

function check (code, family) {
  if (typeof code === 'string') code = parseInt(code)
  return isInteger(code) && code >= family && code < (family + 100)
}

