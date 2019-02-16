import express from 'express';
import bodyParser from 'body-parser';

//Routes
import mealRoutes from './routes/meal.routes';


const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) =>{
  return res.send('The API is working ');
});

// handler
app.use('/server/v1/meals', mealRoutes);

app.listen(PORT, () => {
  console.log (`server is running on ${PORT}`);

});
