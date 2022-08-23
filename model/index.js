const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodemysql', 'root', '$lh50155015', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 7,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('ErrSequelizeor' + err)
    })

sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./user')(sequelize, Sequelize)

module.exports = db;