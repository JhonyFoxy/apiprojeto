'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model { }

    Orders.init({

                data: DataTypes.DATE,
        valor_total: DataTypes.DECIMAL,
        status: DataTypes.STRING(25),
        id_cliente: DataTypes.SMALLINT      
    },
        {
            sequelize,
            modelName: 'orders',
            timestamps: false
        });

        return Orders
}