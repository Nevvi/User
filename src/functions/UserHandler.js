'use strict';

const RegisterRequest = require('../model/request/RegisterRequest')
const UserService = require('../service/UserService')
const userService = new UserService()

module.exports.getUser = async (event) => {
    try{
        console.log("Received request to get user")
        const {userId} = event.pathParameters
        const user = await userService.getUser(userId)
        return createResponse(200, user)
    } catch (e) {
        return createResponse(e.statusCode, e.message)
    }
}

module.exports.createUser = async (event) => {
    try{
        console.log("Received request to create user")
        const body = typeof event.body === 'object' ? event.body : JSON.parse(event.body)
        const request = new RegisterRequest(body)
        request.validate()
        const user = await userService.createUser(request)
        return createResponse(201, user)
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