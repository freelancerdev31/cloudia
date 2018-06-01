'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const binaryMimeTypes = [
	'application/octet-stream',
	'font/eot',
	'font/opentype',
	'font/otf',
	'image/jpeg',
	'image/png',
	'image/svg+xml'
]
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
message = {
   'message': 'Execution started successfully!'
}
return {
    'statusCode': 200,
    'headers': {'Content-Type': 'application/json'},
    'body': JSON.stringify(message)
}