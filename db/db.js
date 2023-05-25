const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('acai', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conexão realizada com sucesso!')
})
.catch(function(){
    console.log('ERRO: Não foi possível realizar a conexão')
});

module.exports = sequelize;