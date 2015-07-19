var isInteger = require('is-integer')

exports.informational = function (code) { return check(code, 100) }
exports.success       = function (code) { return check(code, 200) }
exports.redirection   = function (code) { return check(code, 300) }
exports.clientError   = function (code) { return check(code, 400) }
exports.serverError   = function (code) { return check(code, 500) }

function check (code, family) {

  // if you gave us something
  if (code) {

    // we read 'statusCode' (because response objects)
    if (typeof code === 'object' && 'statusCode' in code) code = code.statusCode

    // we also take strings
    if (typeof code === 'string') code = parseInt(code)

    // returns if it's an integer and it's in the family range
    return isInteger(code) && code >= family && code < (family + 100)

  }

  // else I do nothing
  else return false

}

