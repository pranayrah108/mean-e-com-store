const Order = require("./../db/order");

async function addOrder(userId, orderModel) {
  let order = new Order({
    ...orderModel,
    userId: userId,
    status: "inprogress",
  });
  await order.save();
}

async function getCustomerOrders(userId) {
  let oders = await Order.find({ userId: userId });
  return oders.map((x) => x.toObject());
}

async function getOrders(userId) {
  let oders = await Order.find();
  return oders.map((x) => x.toObject());
}

async function updateOrderStatus(id, status) {
  await Order.findByIdAndUpdate(id, {
    status: status,
  });
}

module.exports = { addOrder, getCustomerOrders, getOrders, updateOrderStatus };
