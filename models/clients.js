'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Clients extends Model { }

    Clients.init({

        nome_cliente: DataTypes.STRING(45),
        email: DataTypes.STRING(60),
        telefone: DataTypes.BIGINT      
    },
        {                                                                                   
            sequelize,
            modelName: 'clients',
            timestamps: false
        });

        return Clients
}