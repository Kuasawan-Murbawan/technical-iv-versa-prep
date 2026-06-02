/*
    Age must be >= 21
    Income must be >= RM3000
    Credit score must be >= 650
*/

function isEligibleForLoan(
    age: number,
    monthlyIncome: number,
    creditScore: number
): boolean{

    if(age < 21){
        return false;
    }

    if(monthlyIncome < 3000){
        return false;
    }


    if(creditScore < 650){
        return false;
    }

    return true;
}