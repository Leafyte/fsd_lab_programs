# Implement UPDATE and DELETE operations on a student collection using Express.js with Mongoose. Create suitable records in the collection to support the operations. Return appropriate message as a response.

## Execution Steps

Open MongoDB Compass

Click on: Add new connection

Name: studentDB

Click: Save & connect 

Open Postman

### Valid JSON
{\
    "name": "Rahul S",\
    "usn": "4VV23CS007",\
    "branch": "CSE",\
    "semester": 5\
}

## Terminal

node app.js

## Testing

POST\
http://localhost:3000/students 
(every time send POST with different student details)\
GET\
http://localhost:3000/students 
(Check database stored in studentDB)\
PUT\
http://localhost:3000/students/4VV23CS007                   (example of usn: 4VV23CS007)
(to update the student record, select Body → raw → JSON and update the data then click send)\
DELETE\
http://localhost:3000/students/4VV23CS007 
(To delete a student detail no request body is required just Click Send.
To verify that the student record has been deleted, use the GET Method.)