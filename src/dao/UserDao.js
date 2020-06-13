'use strict'

const AWS = require('aws-sdk')

module.exports = class UserDao {
    constructor() {
        this.db = new AWS.DynamoDB.DocumentClient({})
        this.table = process.env.USER_TABLE
    }

    async getUser(userId) {
        const result = await this.db.get({
            TableName: this.table,
            Key: {
                partitionKey: userId,
                sortKey: 'USER'
            }
        }).promise()

        return result && result.Item
    }
}