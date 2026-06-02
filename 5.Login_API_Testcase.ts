/*
Question 5: Login API Test Cases

Endpoint:

POST /api/login

Request:

    {
    "email": "user@example.com",
    "password": "Password123!"
    }

Successful response:

    {
    "token": "jwt-token",
    "user": {
        "id": "USR001",
        "email": "user@example.com"
    }
    }

Write test cases for this API.

*/

function login(email: string, password: string) {}

// ======= Positive ======

/*
    1. Valid Email and Username

    response:   1. Status : 200 OK
                2. Response contains: token, user.id, user email, no password

    2. Whitespace in email
    response:   1. Status : 200 OK
                2. Response contains: token, user.id, user email, no password
                3. BE should trim whitespace

    3. Uppercase in username
    response:   1. Status : 200 OK
                2. Response contains: token, user.id, user email, no password
                3. BE should lowercase email    

*/

// ======= Positive ======

/*
    1. Incorrect Passswrod

    response:   1. Status : 401 Unauthorized
                2. Response contains: error message
                3. no token return

*/

// ======= Edge Case =====

/*
    1. Check token expiry time
    2. Multiple login attempt
    3. Very long password & email input
    4. 

*/
