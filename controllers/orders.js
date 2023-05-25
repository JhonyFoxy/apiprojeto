const Sequelize = require('sequelize');
const sequelize =  require('../db/db');
const Orders = require('../models/orders'); models

module.exports = {
    async getAll(req, res){
        const orders = await Orders(sequelize, Sequelize.DataTypes).findAll(); // 

        res.status(200).send(orders)
    },

    async get(req, res){
        const orders = await Orders(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
            res.status(200).send(orders)
   },
   async create(req, res){
    const orders = await Orders(sequelize, Sequelize.DataTypes).create({
        data: req.body.data,
        valor_total: req.body.valor_total,
        status: req.body.status,
        id_cliente: req.body.id_cliente
    })
    res.status(201).send({
        message: "Pedido cadastrado com sucesso."
    })
},

async update(req, res){
const orders = await Orders(sequelize, Sequelize.DataTypes).update({
    data: req.body.data,
    valor_total: req.body.valor_total,
    status: req.body.status,
    id_cliente: req.body.id_cliente
},
{
    where: { id: req.params.id}
}
);
res.status(200).send({
    message: "Pedido atualizado com sucesso."
})
},
async delete(req, res){
    await Orders(sequelize, Sequelize.DataTypes).destroy({
        where: { id: req.params.id }
    })
    res.status(200).send({
        message: ("Pedido Excluído com sucesso.")
    })
}









}