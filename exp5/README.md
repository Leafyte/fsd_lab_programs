# To design and implement a request validation mechanism in an Express.js application using express-validator by applying middleware functions to validate user input (such as name, email, and age)

## Execution Steps:

node app.js

## Testing

POST
http://localhost:3000/user/register

### Valid JSON
{\
"name":"John",\
"email":"john@gmail.com",\
"age":25\
}

## Output
Validation Successful

### Invalid JSON

{\
"name":"",\
"email":"abc",\
"age":15\
}

## Output
Name is required\
Invalid email format\
Age must be at least 18

## Result
Successfully implemented request validation using express-validator middleware.
