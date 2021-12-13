const {
	returnTwo,
	greeting,
	add,
	multiply
} = require('./functions.js');

test('Returns the number 2', () => expect(returnTwo()).toBe(2));
test('Name displays in greeting', () => {
	let name = greeting('Carlotta');
	expect(name).toBe('Hello, Carlotta.');
});
test('Name displays in greeting 2', () => {
	expect(greeting('Charlie')).toBe('Hello, Charlie.');
});

describe('Math Functions tests', () => {
	
	test('Multiplying correctly', () => {
		let product = multiply(2, 4);
		expect(product).toBe(8);
	});

	test('Adding correctly', () => {
		let sum = add(2, 3);
		expect(sum).toBe(5);
	});

	test('Data type of Add', () => {
		let sum = add(1, 1);
		expect(typeof sum).toBe('number');
	});

	test('Alpha character entered in multiply func', () => {
		let product = multiply('asdf', 2);
		expect(product).toBe(NaN);
	});
});
