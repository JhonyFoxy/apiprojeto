const Sequelize = require('sequelize');
const sequelize =  require('../db/db');
const OrdersItems = require('../models/ordersItems');

module.exports = {
    async getAll(req, res){
        const ordersItems = await OrdersItems(sequelize, Sequelize.DataTypes).findAll(); // 

        res.status(200).send(ordersItems)
    },

    async get(req, res){
        const ordersItems = await OrdersItems(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
            res.status(200).send(ordersItems)
   },
   async create(req, res){
    const ordersItems = await OrdersItems(sequelize, Sequelize.DataTypes).create({
        quantidade: req.body.quantidade,
        valor_parcial: req.body.valor_parcial,
        id_produto: req.body.id_produto,
        id_pedido: req.body.id_pedido
    })
    res.status(201).send({
        message: "Items do pedido cadastrado com sucesso."
    })
},

async update(req, res){
const ordersItems = await OrdersItems(sequelize, Sequelize.DataTypes).update({
    quantidade: req.body.quantidade,
    valor_parcial: req.body.valor_parcial,
    id_produto: req.body.id_produto,
    id_pedido: req.body.id_pedido
},
{
    where: { id: req.params.id}
}
);
res.status(200).send({
    message: "Items do pedido atualizado com sucesso."
})
},
async delete(req, res){
    await OrdersItems(sequelize, Sequelize.DataTypes).destroy({
        where: { id: req.params.id }
    })
    res.status(200).send({
        message: ("Item do pedido Excluído com sucesso.")
    })
}









}