'use strict';

const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

const docClient = new AWS.DynamoDB.DocumentClient();
const uuidV4 = require('uuid/v4');

const table = "messages";

exports.create = function(event, context, callback){
  const body_output = JSON.parse(event.body)
  console.log(body_output)
  const params = {
    TableName: table,
    Item:{
      "id": uuidV4(),
      "creation_date": new Date(),
      "message": body_output["message"],
      "recipient_user_id": body_output["recipient_user_id"],
      "sender_user_id": body_output["sender_user_id"]
    },
  };
  docClient.put(params, function(err, data){
    if (err) {
      console.error("Unable to put item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      const ok_response = {
        "statusCode": 200,
        "body": JSON.stringify(data.Items),
        "isBase64Encoded": false,
        "headers": {
          "Access-Control-Allow-Origin": "*"
        },
      };

      callback(null, ok_response)
    }
  });
}
