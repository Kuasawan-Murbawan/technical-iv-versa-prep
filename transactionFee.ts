/*
Rules:

RM0 - RM1000      => 1%
Above RM1000      => 0.5%
Maximum fee RM50

Examples:

500 -> 5
2000 -> 10
20000 -> 50
*/

function calculateTransactionFee(amount: number) :number{

    let feePercent = amount <= 1000 ? 0.01 : 0.005;

    

    return Math.min(50, amount*feePercent);

}

console.log(calculateTransactionFee(500))