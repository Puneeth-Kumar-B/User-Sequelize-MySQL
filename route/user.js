const route = require('express').Router()

const user = require('../controller/user')

route.post('/add', user.createUser)
route.get('/all', user.getAllUsers)
route.get('/:id', user.findUser)
route.put('/update/:id', user.updateUser)
route.delete('/delete/:id', user.deleteUser)

module.exports = route