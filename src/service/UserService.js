'use strict'

const UserDao = require('../dao/UserDao')

module.exports = class AuthenticationService {
    constructor() {
        this.userDao = new UserDao()
    }

    async getUser() {
        return await this.userDao.getUser()
    }
}