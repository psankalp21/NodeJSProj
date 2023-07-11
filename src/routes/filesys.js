const express = require('express');
const router = express.Router();
const filesys = require('../controllers/filesys');

router.post('/upload',filesys.fileupload);
router.post('/merge',filesys.filemerge);
router.post('/move',filesys.filemove);

module.exports = router;