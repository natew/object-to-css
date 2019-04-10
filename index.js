var addPx = require('add-px-to-style')
var hyphenate = require('hyphenate-style-name')

module.exports = function createMarkup(obj) {
  var keys = Object.keys(obj)
  if (!keys.length) return ''
  var i, len = keys.length
  var result = ''

  for (i = 0; i < len; i++) {
    var key = keys[i]
    var val = obj[key]
    var hyphenated = hyphenate(key)

    /* Recursively process nested selectors */
    if (isPlainObj(val)) {
      result += hyphenated + ':{' + createMarkup(val) + '}'
    } else {
      result += hyphenated + ':' + addPx(key, val) + ';'
    }
  }

  return result
}

function isPlainObj(obj) {
  try {
    if (typeof obj === 'object' && obj !== null) {
      /* Prefer Object.getPrototypeOf if avail, or fallback for pre-es5 */
      if (typeof Object.getPrototypeOf === 'function') {
        var proto = Object.getPrototypeOf(obj)
        return proto === Object.prototype || proto === null
      }
      return Object.prototype.toString.call(obj) === '[object Object]'
    }
  } catch (e) {}

  return false
}
