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
const options = {
    mode: 0o2775
}

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

//  Write files to the desired directory
async function saveSignUpData(data) {
    try {
        const existingData = await readExistingData();
        await fse.writeJson(fullPath, [...existingData, data]);
        return 'success';
    } catch (err) {
        console.error(err)
    }
}

//  Sign up page
router.post('/', async function(req, res, next) {
    //  console.log(req.headers, req.body);
    let response = null;
    const fullName = req.body.fullName;
    const bytes = CryptoJS.AES.decrypt(req.body.emailId, 'mysecretkeyhere123456');
    const emailId = bytes.toString(CryptoJS.enc.Utf8);
    const password = req.headers.password;
    const platform = extractPlatform(req.headers['user-agent']);
    const browser = extractBrowser(req.headers['user-agent']);

    const isEmailExists = await validateEmailExists({ emailId });

    if (isEmailExists) {
        response = {
            status: 'error',
            emailId: 'Email already exists!'
        }
    } else {
        const data = { fullName, emailId, password, platform, browser };
        response = {
            status: 'success',
            emailId: await saveSignUpData(data)
        }
    }

    res.send(response);
});

module.exports = router;
