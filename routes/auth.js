const { Router } = require("express");
const router = Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { signupLimiter, signinLimiter } = require("../middleware/rateLimit");

router.post("/signup", signupLimiter, async (req, res) => {
  const { email, name, phone, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.json({
      error: "Bunday email bilan foydalanuvchi mavjud!",
      signup: false,
    });
  }

  await User.create({ email, name, phone, password });
  return res.json({
    message: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
    signup: true,
  });
});

router.post("/signin", signinLimiter, async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    const matchPassword = await bcrypt.compare(password, userExist.password);
    if (matchPassword) {
      res.json({
        message: "Hisobga muvaffaqiyatli kirildi!",
        signin: true,
      });
    } else {
      res.json({ error: "Parol noto'g'ri!", signin: false });
    }
  } else {
    res.json({ error: "Bunday foydalanuvchi mavjud emas!", signin: false });
  }
});

module.exports = router;
