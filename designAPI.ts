/*

Question 5

    Design an API for:

    Create Investment Goal

    Requirements:

    user must be authenticated
    goal name
    target amount
    target date

    Questions:

    What endpoint would you create?
    Request payload?
    Response payload?
    HTTP status codes?
*/

======= REST endpoints =====

POST /api/v1/investment-goals

======= Authorization =======

Bearer Token = {JWT token}
Content-Type = application/json

======= Body Payload =======
{
    "goal_name" : "House Downpayment",
    "target_amount" : 20000,
    "target_date": "2030-05-31"
}

======== Success Response =======

{
    status = 201,
    message = "Investment goal created successfully",
    data = {
        "goal_id" : "G012",
        "goal_name" : "House Downpayment",
        "target_amount" : 20000,
        "target_date": "2030-05-31",
        "created_at" : "2026-06-01"

    }
}


======== Error Response ========
 {
    status = 500,
    message = "Internal Server Error",
    data = {
        message = "Cant connect to backend"
    }
 }

  { 
    status = 401,
    message = "Unauthorized",
    data = {
        message = "Token expired"
    }
 }