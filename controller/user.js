const db = require('../model')
const user = db.users

const createUser = async(req, res) => {
    try {
        const create = await user.create({
            userName: req.body.userName,
            emailId: req.body.emailId,
            phoneNo: req.body.phoneNo,
            password: req.body.password
        })
        if (create){
            res.json({ message: "User added successfully" });
        }
    } catch (e) {
        console.log(e.message)
    }
};


const getAllUsers = (req, res) => {
    user.findAll().then((Users) => {
    res.json({ data: Users }) })
}


const findUser = (req, res) => {
    user.findByPk(req.params.id).then((User) => { res.json({ User }) })
}


const updateUser = async(req, res) => {
    try {
        const id = req.params.id;
        const update = await user.update({
            userName: req.body.userName,
            emailId: req.body.emailId,
            phoneNo: req.body.phoneNo,
            password: req.body.password
        }, { where: { id: id } })
        if (update) {
            res.json({ message: "User details updated!" });
        }
    } catch (e) {
        console.log(e.message)
    }
}


const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const delete_user = await user.destroy({where: { id: id }})
        if (delete_user)
            res.json({ message: "User deleted!" })
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = { createUser, getAllUsers, findUser, updateUser, deleteUser }
