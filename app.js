const express = require('express');

const app = express();

const clientsRoute = require('./routes/clientsRoute');
const productsRoute = require('./routes/productsRoute');

const ordersRoute = require('./routes/ordersRoute');

const ordersItemsRoute = require('./routes/ordersItemsRoute');

app.use(express.json())

app.use('/clients', clientsRoute);

app.use('/products', productsRoute);

app.use('/orders', ordersRoute);

app.use('/ordersItems', ordersItemsRoute);

app.use((req, res, next) => {
    const erro = new Error("Rota não encontrada.")
    erro.status = 404
    next(erro)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
});

module.exports = app;