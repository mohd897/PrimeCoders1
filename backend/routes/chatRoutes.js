const express = require('express');
const router = express.Router();
const { chatInteraction } = require('../controllers/chatController');

router.post('/chat', chatInteraction);

module.exports = router;
