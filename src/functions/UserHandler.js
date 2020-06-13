'use strict';

const UserService = require('../service/UserService')
const userService = new UserService()

module.exports.test = async (event) => {
    try{
        console.log("Received request to get user")
        const user = await userService.getUser()
        return createResponse(200, user)
    } catch (e) {
        return createResponse(e.statusCode, e.message)
    }
}

function createResponse(statusCode, body) {
    return {
        statusCode: statusCode || 500,
        body: JSON.stringify(body)
    }
}