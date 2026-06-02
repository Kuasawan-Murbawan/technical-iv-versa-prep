/*
Question 9: Create Session API

Endpoint:

POST /api/sessions

Request:

{
  "userId": "USR001",
  "sessionDate": "2026-05-30",
  "startTime": "10:00",
  "endTime": "11:00"
}

Requirement:

    user must be authenticated
    session date cannot be in the past
    end time must be after start time
    user can only create session for themselves
    response should return generated session ID like SESS001

Write:

test cases
expected status codes
possible edge cases
*/

