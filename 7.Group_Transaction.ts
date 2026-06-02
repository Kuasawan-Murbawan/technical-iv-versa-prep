/*

Question 7: Group Transactions by Type

Given:

    type Transaction = {
    id: string;
    type: "INCOME" | "EXPENSE";
    amount: number;
    };

    const transactions: Transaction[] = [
    { id: "T001", type: "INCOME", amount: 3000 },
    { id: "T002", type: "EXPENSE", amount: 500 },
    { id: "T003", type: "EXPENSE", amount: 200 },
    { id: "T004", type: "INCOME", amount: 1000 }
    ];

Write a function that returns:

    {
    INCOME: 4000,
    EXPENSE: 700
    }

*/
type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  amount: number;
};

type GroupedTransactions = {
  INCOME: number;
  EXPENSE: number;
};

const transactions: Transaction[] = [
  { id: "T001", type: "INCOME", amount: 3000 },
  { id: "T002", type: "EXPENSE", amount: 500 },
  { id: "T003", type: "EXPENSE", amount: 200 },
  { id: "T004", type: "INCOME", amount: 1000 },
];

function groupTransactions(transactions: Transaction[]): GroupedTransactions {
  let income = 0,
    expense = 0;

  for (let tran of transactions) {
    if (tran.type === "INCOME") {
      income += tran.amount;
    }

    if (tran.type === "EXPENSE") {
      expense += tran.amount;
    }
  }

  return {
    INCOME: income,
    EXPENSE: expense,
  };
}

console.log(groupTransactions(transactions));
