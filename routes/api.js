const { Router } = require("express");
const router = Router();
const { sendMessage } = require("../controllers/sendMessage");
const { sendMessageLimiter } = require("../middleware/rateLimit");

router.post("/sendMessage", sendMessageLimiter, sendMessage);

module.exports = router;
