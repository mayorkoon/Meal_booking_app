import dummyOrder from '../utilities/dummyOrder';

import Orders from '../models/order.model'

const OrderService = {
    getAllOrders() {
        const allOrders = dummyOrder.orders.map((order) =>{
            const newOrder = new Orders();
            newOrder.orderId = order.orderId;
            newOrder.customerName = order.customerName;
            newOrder.mealName = order.mealName;
            newOrder.quantity = order.quantity;
            newOrder.price = order.price;
            newOrder.status = order.status;
            return newOrder;
        });
        return allOrders;
    },
    addOrder(order) {
        const orderLength = dummyOrder.orders.length;
        const lastOrderId = dummyOrder.orders[orderLength - 1].orderId; 
        const newOrderId = lastOrderId + 1;
        order.orderId = newOrderId;
        dummyOrder.orders.push(order);
        return order;
    },
    updateOrder(order) {
        const { id } = order;
        const orderToUpdate = dummyOrder.orders.find(order => order.id == id);
        orderToUpdate.orderId = order.orderId;
        orderToUpdate.customerName = order.customerName;
        orderToUpdate.price = order.price;
        orderToUpdate.quantity = order.quantity;
        orderToUpdate.mealName = order.mealName;
        orderToUpdate.status = order.status;
        dummyOrder.orders[order.id] = orderToUpdate;
        return orderToUpdate
    }
};

export default OrderService;