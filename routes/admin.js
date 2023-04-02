const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controller/admin');




router.get('/getusers',adminController.getIndex);

router.post('/adduser',adminController.postIndex);

router.post('/delete-user/:userId',adminController.PostDeleteuser)

module.exports = router;