const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User")

const router = express.Router();

//registro:
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.json({ message: "usuário registrado!" });

});

//login:
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user await User.findOne({ email })
})