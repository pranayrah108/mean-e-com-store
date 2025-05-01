const expores = require("express");
const mongoose = require("mongoose");
const app = expores();
const port = 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/auth");
const ordeRoutes = require("./routes/order");
const { verifyToken, isAdmin } = require("./middleware/auth-middleware");

app.use(cors());
app.use(expores.json());
app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/category", verifyToken, isAdmin, categoryRoutes);
app.use("/brand", verifyToken, isAdmin, brandRoutes);
app.use("/order", verifyToken, isAdmin, ordeRoutes);
app.use("/product", verifyToken, isAdmin, productRoutes);
app.use("/customer", verifyToken, customerRoutes);
app.use("/auth", authRoutes);

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "e-comm-store-db",
  });
  console.log("mongodb connected");
}

connectDb().catch((err) => {
  console.log(err);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
