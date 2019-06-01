const config = require('../config.json');
const db = require('../_helpers/db');
const Test = db.Test;

module.exports = {
    addResult,
    getUserResults
};

async function addResult(testResult) {
    const test = new Test(testResult);
    return await test.save()
}

async function getUserResults(username) {
    return await Test.find({"username":username});
}