# Design and configure hierarchical routing in Express.js using a modular approach with separate routes, enabling structured URL handling and applying middleware at appropriate route levels for efficient request processing and scalability.

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

Output
Validation Successful

### Invalid JSON

{\
"name":"",\
"email":"abc",\
"age":15\
}

## Output
Name is required
Invalid email format
Age must be at least 18

## Result
Successfully implemented request validation using express-validator middleware.
