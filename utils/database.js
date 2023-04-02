const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking','root','1501',{
    dialect : 'mysql',
    host : 'localhost'
})


module.exports = sequelize;