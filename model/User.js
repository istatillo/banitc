const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const User = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
  },
  { timestamps: true }
);

User.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = model("User", User);
