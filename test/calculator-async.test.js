const { add, subtract, multiply } = require('../calculator');
const { test } = require('tap')

test('Adding two numbers', async ({ equal }) => {
    equal(add(5, 10), 15, 'Adding 10 and 5 equal to 15')
    equal(add(100, 200), 300, 'Adding 100 and 200 equal to 300')
})

test('Subtracting two numbers', async ({ equal }) => {
    equal(subtract(10, 10), 0, 'Subtracting 10 and 10 equal to 0')
    equal(subtract(200, 100), 100, 'Subtracting 200 and 100 equal to 100')
})

test('Multiplying two numbers', async ({ equal }) => {
    equal(multiply(10, 10), 100, 'Multiplying 10 and 10 equal to 100')
    equal(multiply(200, 100), 20000, 'Multiplying 200 and 100 equal to 20000')
})