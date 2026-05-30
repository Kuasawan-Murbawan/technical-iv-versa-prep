/*

Question 6: Validate Transaction

Write a TypeScript function:

function validateTransaction(amount: number, balance: number): boolean

Rules:
    amount must be greater than 0
    amount must not exceed balance
    balance must not be negative
    amount must be a valid number
    return true if valid, otherwise false

*/

function validateTransaction(amount: number, balance:number): boolean{

    if(amount <= 0){
        return false;
    }

    if(amount > balance){
        return false;
    }

    if(balance < 0){
        return false;
    }

    if(!isFinite(amount) || isNaN(amount)){
        return false;
    }


    return true;
}