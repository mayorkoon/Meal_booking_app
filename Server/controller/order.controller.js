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
       const newOrder = req.body;
       const createdOrder = OrderService.addOrder(newOrder);
       return res.json({
            status: 'success',
            data: createdOrder, 
        }).status(201);
    },
    updateAnOrder(req, res) {
        const orderToUpdate = req.body;
        const updatedOrder = OrderService.updateOrder(orderToUpdate);
        return res.json({
          status: 'success',
          data: updatedOrder,
        }).status(201);
      }
}

export default OrderController;