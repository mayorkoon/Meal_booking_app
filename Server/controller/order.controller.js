import OrderService from '../services/order.service';

const OrderController = {
    getAllOrders(req, res){
        const allOrders = OrderService.getAllOrders();
        return res.json({
            status: 'success',
            data: allOrders
        }).status(200);
    },
    addOrder (req, res){
        /*
            Expect a json of the format
            {
                name: "Any Food",
                size: Large,
                "price": 900
            }
        */
       const newOrder = req.body;
       const createdOrder = OrderService.addOrder(newOrder);
       return res.json({
            status: 'success',
            data: createdOrder
        }).status(201);
    },
}

export default OrderController;