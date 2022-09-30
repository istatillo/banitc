const axios = require("axios");

const sendMessage = (req, res) => {
  let botId = "5248005861:AAG1tkGWe5C8THhXjsy7dKuPbMO5CYBiSc8";
  let chatId = "1285249707";
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
