const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Contact = require("../models/Contact");
const authMiddleware = require("../middleware/auth-middleware");

// ✅ Роут для відправки форми Contact Us
router.post("/contact", async (req, res) => {
  try {
    const { companyName, email, phone, message } = req.body;

    if (!email || !phone) {
      return res
        .status(400)
        .json({ message: "Please fill in the required fields." });
    }
    const contact = new Contact({ companyName, email, phone, message });

    await contact.save();
    res.status(201).json({ message: "Your request has been sent!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting form", error: error.message });
  }
});

// ✅ Роут для збереження замовлення
router.post("/order", authMiddleware, async (req, res) => {
  try {
    const {
      products,
      companyName,
      name,
      email,
      phone,
      address,
      comment,
      totalPrice,
    } = req.body;

    if (!products || products.length === 0 || !email || !phone || !totalPrice) {
      return res
        .status(400)
        .json({ message: "Please fill in the required fields." });
    }
    const order = new Order({
      user: req.user.userId,
      products,
      companyName,
      name,
      email,
      phone,
      address,
      comment,
      totalPrice,
    });

    await order.save();
    res.status(201).json({ message: "Order successfully created!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting form", error: error.message });
  }
});

router.get("/orders", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId });
    const total = orders.length;
    res.status(201).json({ orders, total });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting form", error: error.message });
  }
});

module.exports = router;
