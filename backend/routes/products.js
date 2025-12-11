const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const Product = require("../models/Product");

// Налаштування Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "product_images",
    format: async (req, file) => "jpg",
    public_id: (req, file) => Date.now() + "_" + file.originalname,
  },
});

const upload = multer({ storage });

// ✅ Додавання продукту
router.post("/api/products", upload.single("image"), async (req, res) => {
    try {
      const { code, name, description, price, size, color, category } = req.body;
      const imageUrl = req.file ? req.file.path : "";
  
      const product = new Product({
        code,
        name,
        description,
        price,
        size,
        color,
        category,
        image: imageUrl,
      });
  
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating product", error: error.message });
    }
  });
  
  // ✅ Оновлення продукту
  router.patch("/:id", upload.single("image"), async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const product = await Product.findById(id);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      // Якщо є нове зображення, видаляємо старе з Cloudinary
      let imageUrl = product.image;
      if (req.file) {
        if (imageUrl) {
            const publicId = imageUrl.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`product_images/${publicId}`); 
        }
        imageUrl = req.file.path;
      }
  
      // Оновлюємо продукт
      Object.assign(product, updates, {image: imageUrl});
      await product.save();
      res.status(200).json(product);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating product", error: error.message });
    }
  });
  
  // ✅ Видалення продукту
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      if (product.image) {
        const publicId = product.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`product_images/${publicId}`);
      }
  
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Product and image deleted" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting product", error: error.message });
    }
  });
  
  // ✅ Отримання всіх продуктів
  router.get("/", async (req, res) => {
    try {
      let { page = 1, limit = 8 } = req.query;
      page = parseInt(page);
      limit = parseInt(limit);
  
      const totalProducts = await Product.countDocuments();
      const products = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit);
  
      res.status(200).json({
        totalProducts,
        totalPages: Math.ceil(totalProducts / limit),
        currentPage: page,
        products,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching products", error: error.message });
    }
  });
  
  // ✅ Отримання одного продукту
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      res.status(200).json(product);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching product", error: error.message });
    }
  });
  
  // ✅ Отримання продуктів за категорією
  router.get("/category/:category", async (req, res) => {
    const { category } = req.params;
    let { page = 1, limit = 8 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
  
    try {
      if (!["bedding", "towels", "household-linens"].includes(category)) {
        return res.status(400).json({ message: "Invalid category" });
      }
  
      const totalProducts = await Product.countDocuments({ category });
  
      const products = await Product.find({ category })
        .skip((page - 1) * limit)
        .limit(limit);
  
      res.status(200).json({
        totalProducts,
        totalPages: Math.ceil(totalProducts / limit),
        currentPage: page,
        products,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching catalog", error: error.message });
    }
  });
  
  // ✅ Видалення категорії
  router.delete("/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      if (!["bedding", "towels", "household-linens"].includes(category)) {
        return res.status(400).json({
          message: "Invalid category"
        });
      }
  
      const catalog = await Product.findOne({});
      if (!catalog) return res.status(404).json({ message: "Catalog not found" });
  
      delete catalog[category];
      await catalog.save();
      res.status(200).json({ message: `${category} category deleted` });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting category", error: error.message });
    }
  });

  module.exports = router;