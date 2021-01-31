const { add, subtract, multiply } = require('../calculator-thowserror');
const { test } = require('tap')

test('Passing string should throw error', async ({ throws }) => {
    throws(() => add('5', 10), Error('Inputs should be numbers'))
    throws(() => add('100', '200'), Error('Inputs should be numbers'))
})

test('Passing string should throw error', async ({ throws }) => {
    throws(() => subtract('5', 10), Error('Inputs should be numbers'))
    throws(() => subtract('100', '200'), Error('Inputs should be numbers'))
})

test('Passing string should throw error', async ({ throws }) => {
    throws(() => multiply('5', 10), Error('Inputs should be numbers'))
    throws(() => multiply('100', '200'), Error('Inputs should be numbers'))
})

test('Adding two numbers', async ({ equal }) => {
    equal(add(5, 10), 15, 'Adding 10 and 5 equal to 15')
    equal(add(100, 200), 300, 'Adding 100 and 200 equal to 300')
})