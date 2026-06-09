type Account = {
	id: string;
	name: string;
	age: number;
	isActive: boolean;
	role: "USER" | "ADMIN";
};

const accounts: Account[] = [
	{ id: "U001", name: "Afiq", age: 25, isActive: true, role: "USER" },
	{ id: "U002", name: "Ali", age: 17, isActive: false, role: "USER" },
	{ id: "U003", name: "Sara", age: 30, isActive: true, role: "ADMIN" },
	{ id: "U004", name: "John", age: 40, isActive: false, role: "USER" },
];

const nullAccount: Account[] = [];

function getNameList(accs: Account[]): Promise<any[]> {
	return new Promise((resolve, reject) => {
		if (accs.length > 0) {
			resolve(
				accs.map((acc) => {
					return {
						name: acc.name,
						id: acc.id,
						isActive: acc.isActive,
						role: acc.role,
					};
				}),
			);
		} else {
			reject("Account not found");
		}
	});
}

function getActiveUser(accs: Account[]): Promise<any[]> {
	return new Promise((resolve, reject) => {
		if (accs.length === 0) {
			reject("No account found");
		}

		let activeUsers = accs.filter((acc) => acc.isActive);

		if (activeUsers.length === 0) {
			reject("No active users");
		}

		resolve(activeUsers);
	});
}

function findUser(accs: Account[], userID: string): Promise<Account> {
	return new Promise((resolve, reject) => {
		if (accs.length === 0) {
			reject("No account found");
		}
		let fetchedUser: any = accs.find((user) => user.id === userID) || 0;

		if (fetchedUser === 0) reject("No user found");

		resolve(fetchedUser);
	});
}

function isAdminRole(accs: Account[]): Promise<boolean> {
	return new Promise((resolve, reject) => {
		if (accs.length === 0) {
			reject("No account found");
		}

		let isAdmin = accs.some((acc) => {
			return acc.role === "ADMIN";
		});

		isAdmin ? resolve(true) : reject("No Admin found");
	});
}

getNameList(accounts)
	.then((nameLists) => {
		console.log("All Accounts:", nameLists);
		return getActiveUser(nameLists);
	})
	.then((activeUsers) => {
		console.log("Active Users: ", activeUsers);
		return findUser(activeUsers, "U003");
	})
	.then((fetchedUser) => {
		console.log("Fetched User: ", fetchedUser);
		return isAdminRole(accounts);
	})
	.then((adminAvailable) => {
		console.log("Admin Exist? ", adminAvailable);
	})
	.catch((error) => {
		console.log(error);
	});
