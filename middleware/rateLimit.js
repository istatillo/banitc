const rateLimit = require("express-rate-limit");

const sendMessageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message:
    "Bu IP manzildan ko'p so'rov yuborildi! 15 minutdan keyin qayta uruning!",
  standardHeaders: true,
  legacyHeaders: false,
});

const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 min
  max: 5,
  message:
    "Bu IP manzildan ko'p so'rov yuborildi! 1 soatdan keyin qayta uruning!",
  standardHeaders: true,
  legacyHeaders: false,
});

const signinLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 60 min
  max: 10,
  message:
    "Bu IP manzildan ko'p so'rov yuborildi! 30 minutdan keyin qayta uruning!",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  sendMessageLimiter,
  signupLimiter,
  signinLimiter,
};
