const Sequelize = require('sequelize');
const sequelize =  require('../db/db');
const Clients = require('../models/clients');

module.exports = {
    async getAll(req, res){
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll(); // 

        res.status(200).send(clients)
    },

    async get(req, res){
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
            res.status(200).send(clients)
   },
   async create(req, res){
    const clients = await Clients(sequelize, Sequelize.DataTypes).create({
        nome_cliente: req.body.nome_cliente,
        email: req.body.email,
        telefone: req.body.telefone,
    })
    res.status(201).send({
        message: "Cliente cadastrado com sucesso."
    })
},
   async update(req, res){
    const clients = await Clients(sequelize, Sequelize.DataTypes).update({
        nome_cliente: req.body.nome_cliente,
        email: req.body.email,
        telefone: req.body.telefone,
    },
    {
        where: { id: req.params.id}
    }
    );
    res.status(200).send({
        message: "Cliente atualizado com sucesso."
    })
   },
   async delete(req, res){
        await Clients(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ("Cliente Excluído com sucesso.")
        })
   }









}