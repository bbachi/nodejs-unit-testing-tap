const promise = require('../promise');
const { test } = require('tap');

test('Testing Call Back With Error', async ({ rejects }) => {

    await rejects(promise('http://localhost:3020/tes'), Error("url is wrong"))

});

test('Should return data', async ({ ok, strictDeepEqual }) => {

    const data = await promise('http://localhost:3020/test');

    ok(data);
    strictDeepEqual(data, "test");
});