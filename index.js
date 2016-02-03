var addPx = require('add-px-to-style')
var hyphenate = require('hyphenate-style-name')

module.exports = function createMarkup(obj) {
  let keys = Object.keys(obj)
  if (!keys.length) return ''
  let i, len = keys.length
  let result = ''

  for (i = 0; i < len; i++) {
    let key = keys[i]
    let val = obj[key]
    result += hyphenate(key) + ':' + addPx(key, val)
  }

  return result
}