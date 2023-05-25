'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class OrdersItems extends Model { }

    OrdersItems.init({

        quantidade: DataTypes.SMALLINT,
        valor_parcial: DataTypes.DECIMAL(9,2),
        id_produto: DataTypes.SMALLINT,
        id_pedido: DataTypes.SMALLINT      
    },
        {
            sequelize,
            modelName: 'ordersItems',
            timestamps: false
        });

        return OrdersItems
}