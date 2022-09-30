const axios = require("axios");

const sendMessage = (req, res) => {
  let botId = process.env.BOT_ID;
  let chatId = process.env.CHAT_ID;
  const { message } = req.body;
  axios
    .post("https://api.telegram.org/bot" + botId + "/sendMessage", {
      chat_id: chatId,
      text: message,
    })
    .finally(() => {
      res.send("Ma'lumotingiz yuborildi! Tez orada siz bilan bog'lanamiz!");
    });
};

module.exports = { sendMessage };
