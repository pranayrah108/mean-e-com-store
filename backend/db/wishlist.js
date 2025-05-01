const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
});
const Wishlist = mongoose.model("wishlists", wishListSchema);
module.exports = Wishlist;
