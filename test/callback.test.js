const callback = require('../callback');
const { test } = require('tap');

test('Testing Call Back With Error', ({ contains, end }) => {

    callback('http://localhost:3020/tes', (err) => {
        
        contains(err, Error("url is wrong"));
        end();
    })
});

test('Should return data', ({ equal, end }) => {

    callback('http://localhost:3020/test', (err, data) => {
        
        equal(data, 'test');
        end();
    })
});
