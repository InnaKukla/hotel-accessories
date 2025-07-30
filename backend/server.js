const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const favoritesRoutes = require("./routes/favorites");
const cartRoutes = require("./routes/cart");
const formRoutes = require("./routes/form");
const productsRoutes = require("./routes/products");
const Product = require("./models/Product");

dotenv.config();


const warmUpDatabase = async () => {
  try {
    console.log("Warm up database...");
    await Product.find().limit(8);
    await Product.find({category: "bedding"}).limit(8);
    await Product.find({category: "towels"}).limit(8);
     await Product.find({category: "household-linens"}).limit(8);
    console.log("Warm up finished");
    
  } catch (error) {
    console.error("Warm up error", error);
    
  }
}

// Підключення до MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
     await warmUpDatabase();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
connectDB();

const app = express();
app.use(express.json());

// Дозволяємо запити тільки з мого фронтенду (localhost:3000)
app.use(
  cors({
    origin: ["https://innakukla.github.io"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    // credentials: true
  })
);

app.options('*', cors());

app.use("/api/auth", authRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/form", formRoutes);
app.use("/api/products", productsRoutes);

app.get("/wake-up", async (req, res) => {
  try {
    await Product.find().limit(8);
    await Product.find({ category: "bedding" }).limit(8);
    await Product.find({ category: "towels" }).limit(8);
    await Product.find({ category: "household-linens" }).limit(8);
    res.status(200).send("Server is awake and warmed up");
  } catch (error) {
    console.error("Wake-up error:", error);
    res.status(500).send("Wake-up failed");
  }
});


// ✅ Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
