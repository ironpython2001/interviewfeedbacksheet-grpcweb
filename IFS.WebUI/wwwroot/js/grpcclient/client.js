/// <reference path="greet_pb.js" />
/// <reference path="greet_grpc_web_pb.js" />
const { HelloRequest, HelloReply } = require('./greet_pb.js');
const { GreeterClient } = require('./greet_grpc_web_pb.js');

var client = new GreeterClient('http://localhost:5001');

var request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
    console.log(response.getMessage());
});