import express from 'express'
const app = express();

const PORT = 5000;

app.get('/', (req, res) =>{
    return res.send('The API is working ');
});

app.listen(PORT, () => {
    //console.log('Server is listening on port ' + PORT);conz
    console.log (`server is running on ${PORT}`);

});
