import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    let check = await User.findOne({ email: req.body.email });
    if (check) {
      console.log("User already exists:", check);
      return res.status(400).json({
        success: false,
        errors: "Existing user found with the same email address",
      });
    }

    let saltRounds = 10;
    const hash = await bcrypt.hash(req.body.password, saltRounds);

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      cartData: cart,
    });

    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(400).json({ success: false, error: "User not found" });
    }
    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if (!match) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Password" });
    }

    const data = {
      user: {
        id: foundUser.id,
      },
    };
    const token = jwt.sign(data, "secretcode", { expiresIn: "1m" });

    console.log(token, "token");

    res
      .status(200)
      .json({ success: true, message: "Login successfully!", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
