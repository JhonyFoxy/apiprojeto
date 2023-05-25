'use strict'

const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Products extends Model { }

    Products.init({

        descricao: DataTypes.STRING(100),
        categoria: DataTypes.STRING(30),
        nome_produto: DataTypes.STRING(60),
        preco_produto: DataTypes.DECIMAL
    },
        {
            sequelize,
            modelName: 'products',
            timestamps: false
        });

        return Products
}