/*

    # Question 1: Wallet Transfer

    What edge cases, bugs or missing validations do you see

*/

let balance = 1000;

function transfer(amount: number): boolean{

    if(amount > balance){
        return false;
    }

    balance -= amount;
    console.log(balance); 

    return true;
}

console.log(transfer(55.5));

/* 

Issues:     1. the balance is global so it is hard to keep track, better solution is send as parameter
            2. no history transaction implemented
            3. No error response as to why cant transfer
            
 Missing Validations: 
    - balance should not be negative
    - amount should not be
        - zero
        - non numbers (NaN or Infinity)
    - handle decimal point properly

 */




function isValidTransfer(amount: number, currentBalance: number): boolean{

    if(!isFinite(amount) || !isFinite(currentBalance)) return false;

    if(amount == 0 ) return false;

    if(amount < currentBalance){
        currentBalance -= amount;
        return true;
    }



    return false;
}