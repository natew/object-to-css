const addPx = require('add-px-to-style');
const hyphenate = require('hyphenate-style-name');

function createCssRule(obj, prepend = '') {
  const keys = Object.keys(obj);
  return keys.length ? keys.map(key => {
    const properties = createCssProperties(obj[key]);
    if (properties === '') return '';
    return prepend + key + '{' + properties + '}';
  }).join('') : '';
}

function createCssClasses(obj) {
  return createCssRule(obj, '.');
}

function createCssIdentifiers(obj) {
  return createCssRule(obj, '#');
}

function createCssProperties(obj) {
  const keys = Object.keys(obj);
  return keys.length ? keys.map((key, i) => 
    hyphenate(key) + ':' + addPx(key, obj[key]) + (i + 1 === keys.length ? '' : ';')
  ).join('') : '';
}

module.exports = {createCssRule, createCssClasses, createCssIdentifiers, createCssProperties}