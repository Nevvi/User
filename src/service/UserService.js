'use strict'

const User = require('../model/user/User')
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

    async createUser(registerRequest) {
        const user = new User(registerRequest)
        return await this.userDao.createUser(user)
    }
}