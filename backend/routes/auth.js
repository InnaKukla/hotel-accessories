const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware"); // Шлях до твоєї мідлвари

// Реєстрація
router.post("/register", async (req, res) => {
  try {
    const {
      companyName,
      firstName,
      lastName,
      phone,
      email,
      password,
      confirmPassword,
    } = req.body;

    // Перевірка, чи є такий користувач
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Перевірка пароля
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Хешування пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Створення користувача
    const user = new User({
      companyName,
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    });

    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "User registered successfully",
      token, // Повертаємо токен
      user: {
        id: user._id,
        companyName: user.companyName,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
});

// Логін
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Перевірка користувача
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Перевірка пароля
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Створення JWT-токена
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        companyName: user.companyName,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

router.get("/user/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    // Знаходимо користувача в базі
    // const user = await User.findById(userId);
    if (!id) return res.status(404).json({ message: "User id is required" });
    const user = await User.findById(id).select("-password");
    // Оновлюємо лише передані поля


    // Якщо потрібно оновити пароль, хешуємо його

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
});

router.put("/update-profile", authMiddleware, async (req, res) => {
  try {
    const { companyName, firstName, lastName, phone, password } = req.body;
    
    const userId = req.user.userId;

    // Знаходимо користувача в базі
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Оновлюємо лише передані поля

    if (companyName) user.companyName = companyName;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phone) user.phone = phone;

    // Якщо потрібно оновити пароль, хешуємо його

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    res.status(200).json({ message: "User update successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
});

router.post("/logout", authMiddleware, async (req, res) => {
  try {
    const id = req.user.userId;
    
    const user = await User.findByIdAndUpdate(id, {token: null},{ new: true}, {user: {}});

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // eslint-disable-next-line no-unused-expressions
    // user.token === null;
     await user.save()
console.log("user after logout", user);

    res.status(200).json({ message: "You logout" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
});


module.exports = router;
