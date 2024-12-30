const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log('Lambda incoming event: ', JSON.stringify(event, null, 2));
  awsServerlessExpress.proxy(server, event, context);
};
