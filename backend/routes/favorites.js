const express = require("express");
const router = express.Router();

const Favorite = require("../models/Favorite");
const authMiddleware = require("../middleware/auth-middleware");

// ✅ Отримати всі улюблені товари користувача
router.get("/", authMiddleware, async (req, res) => {
  const { userId } = req.user;

  try {
    const favorites = await Favorite.find({ userId }).populate("productId");

    res.json(favorites.map((fav) => fav.productId));
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving favorites", error: error.message });
  }
});

router.delete("/:productId", authMiddleware, async (req, res) => {
  try {
    const { productId } = req.params;

    const favorite = await Favorite.findOneAndDelete({
      userId: req.user.userId,
      productId,
    });
    if (!favorite) {
      return res
        .status(404)
        .json({ message: "Product doesn't find in favorites" });
    }

    res.status(200).json({ message: "Product delete from favorites" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting from favorites", error: error.message });
  }
});

// ✅ Додати товар в улюблені
router.post("/", async (req, res) => {
  try {
    const { productId, userId } = req.body;

    if (!userId || !productId) {
      return res
        .status(400)
        .json({ message: "userId and productId are required" });
    }
    // Перевіряємо, чи вже є цей товар у фаворитах
    const existingFavorite = await Favorite.findOne({ userId, productId });
    if (existingFavorite) {
      return res
        .status(400)
        .json({ message: "Product is already in favorites" });
    }

    const favorite = new Favorite({ userId, productId });
    await favorite.save();

    res.status(201).json({ message: "Product add to favorites", favorite });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding to favorites", error: error.message });
  }
});

// ✅ Отримати товар та перевірити чи він в  улюблених
router.get("/:productId", authMiddleware, async (req, res) => {
  const { productId } = req.params;
  const { userId } = req.user;
  try {
    const favorite = await Favorite.findOne({userId, productId}).populate("productId");
    if (!favorite) {
      return res
        .status(200)
        .json({ isFavorite: false, product: null });
    }

    res.status(200).json({ isFavorite: true, product: favorite.productId });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error receiving product", error: error.message });
  }
});

module.exports = router;
