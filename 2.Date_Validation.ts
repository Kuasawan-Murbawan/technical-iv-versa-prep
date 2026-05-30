
 /*

    # Question 2: Date Validation

    What issues or missing validations do you see

*/

function isValidDateRange(startDate: Date, endDate: Date): boolean {

    if(startDate > endDate){
        return false;
    }

    return true;
}

const startDate = new Date("December 18, 1995 03:24:00");
const endDate = new Date("December 19, 1995 03:24:00");

console.log(isValidDateRange(startDate, endDate))


/*
Issues with Business Requirements:  1. Do same day valid?
                                    2. what if the start date is in the past
                                    3.what is the minimum duration?

Data Validation :   - make sure Date is not null
                    - make sure the format is correct (eg YYYY-MM-DD)
                    - make sure same timezone
                    - make sure the date interval is at least 1 day

*/