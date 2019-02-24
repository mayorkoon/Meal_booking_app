import express from 'express';
import bodyParser from 'body-parser';

//Routes
import mealRoutes from './routes/meal.routes';
import orderRoutes from './routes/order.routes';
import menuRoute from './routes/menu.route';


const app = express();

const PORT = 9001;

app.use(bodyParser.json());

app.get('/', (req, res) =>{
  return res.send('The API is working ');
});

// handler
app.use('/server/v1/meals', mealRoutes);
app.use('/server/v1/orders', orderRoutes);
app.use('/server/v1/menu', menuRoute);

app.listen(PORT, () => {
  console.log (`server is running on ${PORT}`);

});

export default app;