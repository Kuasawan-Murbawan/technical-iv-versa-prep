type Transactionq = {
	type: "DEPOSIT" | "WITHDRAWAL";
	amount: number;
};

type GroupedTransactionss = {
	DEPOSIT: number;
	WITHDRAWAL: number;
};

function groupTransactionss(
	transactions: Transactionq[],
): GroupedTransactionss {
	let depo = 0;
	let withd = 0;

	for (let elem of transactions) {
		if (elem.type == "DEPOSIT") {
			depo += elem.amount;
		} else {
			withd += elem.amount;
		}
	}

	return {
		DEPOSIT: depo,
		WITHDRAWAL: withd,
	};
}

console.log(
	groupTransactionss([
		{
			type: "DEPOSIT",
			amount: 300,
		},
		{
			type: "DEPOSIT",
			amount: 1000,
		},
		{
			type: "WITHDRAWAL",
			amount: 300,
		},
	]),
);
