'use strict'

const {UserNotFoundError} = require('../error/Errors')
const UserDao = require('../dao/UserDao')

module.exports = class AuthenticationService {
    constructor() {
        this.userDao = new UserDao()
    }

    async getUser(userId) {
        const user = await this.userDao.getUser(userId)

        if (!user) {
            throw new UserNotFoundError(userId)
        }

        return user
    }
}