'use strict';

const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

const docClient = new AWS.DynamoDB.DocumentClient();
const uuidV4 = require('uuid/v4');

const table = "users";

exports.create = function(event, context, callback){
  const body_output = JSON.parse(event.body)
  console.log(body_output)
  const params = {
    TableName: table,
    Item:{
      "id": uuidV4(),
      "phone": body_output["phone"],
      "username": body_output["username"],
      "company": body_output["company"],
      "description": body_output["description"],
      "email": body_output["email"],
      "linkedin": body_output["linkedin"],
      "photo": body_output["photo"],
      "university": body_output["university"],
      "job": body_output["job"],
      "full_name": body_output["full_name"],
      "instagram": body_output["instagram"],
      "twitter": body_output["twitter"],
      "whatsapp": body_output["whatsapp"],
      "birth_date": body_output["birth_date"],
      "gender": body_output["gender"],
      "city": body_output["city"],
      "uf": body_output["uf"],
      "neighborhood": body_output["neighborhood"],
      "cpf": body_output["cpf"],
      "document_photo": body_output["document_photo"],
      "document_type": body_output["document_type"],
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
