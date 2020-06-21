'use strict'

const AbstractAuthorizer = require('../../Common/authorization/AbstractAuthorizer')
const {HttpVerb} = require('../../Common/authorization/AuthPolicy')

class UserAuthorizer extends AbstractAuthorizer {
    generatePermissions(authPolicy, userId) {
        if (userId) {
            authPolicy.allowMethod(HttpVerb.GET, `/v1/users/${userId}`)
            authPolicy.allowMethod(HttpVerb.PATCH, `/v1/users/${userId}`)
        } else {
            authPolicy.denyAllMethods()
        }
    }
}

const authorizer = new UserAuthorizer()

module.exports.authorize = async (event) => {
    return await authorizer.authorize(event)
}