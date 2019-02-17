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
    }
};

export default OrderService;