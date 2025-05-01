const express = require("express");
const { getOrders, updateOrderStatus } = require("../handlers/order-handler");
const router = express.Router();

router.get("", async (req, res) => {
  const orders = await getOrders();
  res.send(orders);
});

router.post("/:id", async (req, res) => {
  const id = req.params.id;
  const status = req.params.status;
  await updateOrderStatus(id, status);
  res.send({message:"updated"});
});

module.exports = router;
