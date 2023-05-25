const Sequelize = require('sequelize');
const sequelize =  require('../db/db');
const Products = require('../models/products');

module.exports = {
    async getAll(req, res){
        const products = await Products(sequelize, Sequelize.DataTypes).findAll(); // 

        res.status(200).send(products)
    },

    async get(req, res){
        const products = await Products(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
            res.status(200).send(products)
   },
   async create(req, res){
    const products = await Products(sequelize, Sequelize.DataTypes).create({
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        nome_produto: req.body.nome_produto,
        preco_produto: req.body.preco_produto
    })
    res.status(201).send({
        message: "Produto cadastrado com sucesso."
    })
},

async update(req, res){
const products = await Products(sequelize, Sequelize.DataTypes).update({
    descricao: req.body.descricao,
    categoria: req.body.categoria,
    nome_produto: req.body.nome_produto,
    preco_produto: req.body.preco_produto
},
{
    where: { id: req.params.id}
}
);
res.status(200).send({
    message: "Produto atualizado com sucesso."
})
},
async delete(req, res){
    await Products(sequelize, Sequelize.DataTypes).destroy({
        where: { id: req.params.id }
    })
    res.status(200).send({
        message: ("Produto Excluído com sucesso.")
    })
}









}