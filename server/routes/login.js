const express = require('express');
const CryptoJS = require('crypto-js');
const router = express.Router();

/* Login page. */
router.post('/', function(req, res, next) {
    const bytes  = CryptoJS.AES.decrypt(req.body.emailId, 'mysecretkeyhere123456');
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    res.send({
        data: originalText
    })
});

module.exports = router;
