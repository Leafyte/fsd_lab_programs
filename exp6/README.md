# Implement POST and GET methods on a Student collection using Express.js and Mongoose to perform Create and Read operations.Return appropriate message as a response.

## Execution Steps

Open MongoDB Compass

Click on: Add new connection

Name: studentDB

Click: Save & connect

Open Postman

### Valid JSON
{/
    "name": "Rahul S",/
    "usn": "4VV23CS007",/
    "branch": "CSE",/
    "semester": 5/
}

### Terminal

node app.js

## Testing

POST
http://localhost:3000/students
(every time send POST with different student details)
GET
http://localhost:3000/students
Check database stored in studentDB
