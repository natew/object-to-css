# object-to-css
> Converts an object to (minified) css

[![NPM](https://img.shields.io/npm/v/object-to-css.svg)](https://www.npmjs.com/package/object-to-css)

## createCssRule(obj, prepend = '')
> Create a css rule of an object of objects.

```js
const objectToCss = require('object-to-css');

const input = {
	'.foo': {
		padding: 10,
	},
	bar: {
		margin: '10em',
	},
};

objectToCss.createCssRule(input);
// result: ".foo{padding:10px}bar{margin:10em}"

objectToCss.createCssRule({foo:{}});
// result: ""
```

## createCssClasses(obj)
> Create a css class of an object of objects.

```js
const objectToCss = require('object-to-css');

const input = {
	foo: {
		padding: 10,
	},
	bar: {
		margin: '10em',
	},
};

objectToCss.createCssClasses(input);
// result: ".foo{padding:10px}.bar{margin:10em}"
```

## createCssIdentifiers(obj)
> Create a css identifiers of an object of objects.

```js
const objectToCss = require('object-to-css');

const input = {
	foo: {
		padding: 10,
	},
	bar: {
		margin: '10em',
	},
};

objectToCss.createCssIdentifiers(input);
// result: "#foo{padding:10px}#bar{margin:10em}"
```

## createCssProperties(obj)
> Create a css rule properties of an object.

```js
const objectToCss = require('object-to-css');

const input = {
	padding: 10,
	margin: '10em',
};

objectToCss.createCssProperties(input);
// result: "padding:10px;margin:10em"
```

# License

MIT © [LSVH](https://github.com/LSVH)