module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("user", {
        userName: {
            type: Sequelize.STRING
        },
        emailId: {
            type: Sequelize.STRING
        },
        phoneNo: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }

    })
    return users
}