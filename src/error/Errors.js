'use strict'

module.exports.InvalidRequestError = class extends Error {
    constructor(message) {
        super(message)
        this.statusCode = 400;
    }
}

module.exports.UserNotFoundError = class extends Error {
    constructor(userId) {
        super(`User not found with id: ${userId}`)
        this.statusCode = 400;
    }
}
