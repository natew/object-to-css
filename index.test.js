const objectToCss = require('./index');

describe('testing `createCssProperties(obj)`', () => {
	test('removes last property its semicolon', () => {
		expect(objectToCss.createCssProperties({
			padding: "10px",
			marginTop: "10px",
		})).toBe("padding:10px;margin-top:10px");
	});
	test('hyphenates object keys', () => {
		expect(objectToCss.createCssProperties({
			marginTop: "10px",
		})).toBe("margin-top:10px");
	});
	test('prepends `px` to number values', () => {
		expect(objectToCss.createCssProperties({
			padding: 10,
		})).toBe("padding:10px");
	});
	test('does not modify string values even when string is numeric', () => {
		expect(objectToCss.createCssProperties({
			padding: '0',
		})).toBe("padding:0");
	});
	test('works with multiple properties', () => {
		expect(objectToCss.createCssProperties({
			padding: 10,
			margin: '20px',
			borderTopWidth: '0',
		})).toBe("padding:10px;margin:20px;border-top-width:0");
	});
	test('returns empty string without any properties', () => {
		expect(objectToCss.createCssProperties({})).toBe("");
	});
});
describe('testing `createCssRule(obj)', () => {
	test('creates a single css rule', () => {
		expect(objectToCss.createCssRule({
			'.test': {
				padding: 10,
			},
		})).toBe(".test{padding:10px}");
	});
	test('creates multiple css classes', () => {
		expect(objectToCss.createCssRule({
			'.test': {
				padding: 10,
			},
			'#foo': {
				padding: 10,
			},
			'#foo .bar': {
				padding: 10,
			},
		})).toBe(".test{padding:10px}#foo{padding:10px}#foo .bar{padding:10px}");
	});
	test('does not create classes when class has no properties', () => {
		expect(objectToCss.createCssRule({
			'.test': {},
		})).toBe("");
	});
});
describe('testing `createCssClasses(obj)', () => {
	test('prepends dot to key name', () => {
		expect(objectToCss.createCssClasses({
			test: {
				padding: 10,
			},
		})).toBe(".test{padding:10px}");
	});
});
describe('testing `createCssIdentifiers(obj)', () => {
	test('prepends hashtag to key name', () => {
		expect(objectToCss.createCssIdentifiers({
			test: {
				padding: 10,
			},
		})).toBe("#test{padding:10px}");
	});
});