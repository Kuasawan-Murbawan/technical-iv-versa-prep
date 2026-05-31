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
/*
    1. Boundary date
    2. Timezone crossing
    3. Leap year
    4. Very distant future

*/



//  ----- Negative Cases ------
/*
    1. Start yesterday, End tomorrow
    2. Start tomorrow, End yesterday
    3. Start today, end today
    4. Start null, end tomorrow
    5. Start tomorrow, end null
    6.Invalid date
*/

// startDate is before current date 
validateStartEndDateTime(new Date("December 18, 2025 03:24:00"), new Date("December 18, 2029 03:24:00"));

// endDate is before startDate
validateStartEndDateTime(new Date("December 18, 2027 03:24:00"), new Date("December 18, 2026 03:24:00"));

// startdate and enddate the same
validateStartEndDateTime(new Date("December 18, 2025 03:24:00"), new Date("December 18, 2025 03:24:00"));


// ----- Positive Cases -----
/*
    1. Start today, End tomorrow
    2. Start Next, End NExt years
    3. Start Today 10, End today 10.01
*/
validateStartEndDateTime(new Date("January 01, 2026 03:24:00"), new Date("January 01, 2036 03:24:00"));

