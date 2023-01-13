//  Library Import
const express = require('express');
const CryptoJS = require('crypto-js');
const fse = require('fs-extra');
const router = express.Router();

//  Utils import
const { extractPlatform, extractBrowser } = require('../utils/util');

//  Directory constants
const directory = './server/userData';
const fileName = 'userData.json';
const fullPath = `${directory}/${fileName}`;

//  Read existing data
async function readExistingData() {
    try {
        await fse.ensureFile(fullPath);
        const existingData = await fse.readJson(fullPath);
        return existingData;
    } catch (err) {
        console.error(err)
    }
}

//  Validate if email exists
async function validateEmailExists(data) {
    try {
        const existingData = await readExistingData();
        const matchedData = existingData.find(item => item.emailId === data.emailId);
        return matchedData ? true : false;
    } catch (err) {
        console.error(err)
    }
}

//  Login page
router.post('/', async function(req, res, next) {
    //  console.log(req.headers, req.body);
    let response = null;
    const bytes = CryptoJS.AES.decrypt(req.body.emailId, 'mysecretkeyhere123456');
    const emailId = bytes.toString(CryptoJS.enc.Utf8);
    const password = req.headers.password;
    const platform = extractPlatform(req.headers['user-agent']);
    const browser = extractBrowser(req.headers['user-agent']);

    const isEmailExists = await validateEmailExists({ emailId });

    if (!isEmailExists) {
        response = {
            status: 'error',
            emailId: `Email doesn't exist!`
        }
    } else {
        const data = { emailId, password, platform, browser };
        response = {
            status: 'success',
            emailId: null
        }
    }

    res.send(response);
});

module.exports = router;
