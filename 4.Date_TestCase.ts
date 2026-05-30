/*
    Section B — Write Test Cases
    Question 4: Validate Start and End DateTime

    Requirement:

    User can create an investment goal. The start date must be today or later. The end date must be after the start date. 
    Date and time must be valid.

    Write test cases for this requirement.

    Include:

    positive cases
    negative cases
    edge cases
*/

function validateStartEndDateTime(startDate: Date, endDate: Date){

    // Must be not null

    // Must be valid Date

    // Start date must be today onwards

    // End Date must be after the start date



}
// -----  Edge Cases ------
// Null
validateStartEndDateTime(new Date(), new Date());

// Invalid values
validateStartEndDateTime(new Date("abc"), new Date("0124"));

// Invalid Format
validateStartEndDateTime(new Date("18th December, 2025:03:24:00"), new Date("18-12-2029"));



//  ----- Negative Cases ------
// startDate is before current date 
validateStartEndDateTime(new Date("December 18, 2025 03:24:00"), new Date("December 18, 2029 03:24:00"));

// endDate is before startDate
validateStartEndDateTime(new Date("December 18, 2027 03:24:00"), new Date("December 18, 2026 03:24:00"));

// startdate and enddate the same
validateStartEndDateTime(new Date("December 18, 2025 03:24:00"), new Date("December 18, 2029 03:24:00"));


// ----- Positive Cases
validateStartEndDateTime(new Date("January 01, 2026 03:24:00"), new Date("January 01, 2036 03:24:00"));
