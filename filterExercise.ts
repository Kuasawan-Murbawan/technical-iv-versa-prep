function filterEx() {
	const activities = [
		{
			activityID: "ACT001",
			exerciseID: 1,
		},
		{
			activityID: "ACT002",
			exerciseID: 3,
		},
		{
			activityID: "ACT003",
			exerciseID: 1,
		},
	];

	const result = activities.filter((act) => {
		return act.exerciseID === 1;
	});

	// console.log(result);

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const evenNum = arr.filter((elem) => {
		return elem % 2 === 0;
	});

	// console.log(evenNum);

	const usernames = [
		"alex",
		"staceysmom1978",
		"clara",
		"johndoecoding101",
		"MoanaFan",
	];

	const long10 = usernames.filter((un) => {
		return un.length < 10;
	});

	// console.log(long10);

	const products = [
		{ name: "Wireless Mouse", price: 25 },
		{ name: "Mechanical Keyboard", price: 120 },
		{ name: "4K Monitor", price: 350 },
		{ name: "Mousepad", price: 15 },
	];

	const above100 = products.filter((prod) => {
		return prod.price > 100;
	});

	// console.log(above100);

	const students = [
		{ name: "Alice", track: "Frontend", status: "Active" },
		{ name: "Bob", track: "Backend", status: "Active" },
		{ name: "Charlie", track: "Frontend", status: "Withdrawn" },
		{ name: "David", track: "Frontend", status: "Active" },
	];

	const fe = students.filter((stud) => {
		return stud.track === "Frontend" && stud.status === "Active";
	});

	// console.log(fe);

	// remove duplicates

	const removedup = (item, index, array) => {
		return array.indexOf(item) === index;
	};

	const uniqNum = [1, 1, 2, 3, 4, 5, 1, 2, 4].filter(removedup);
	console.log(uniqNum);
}

filterEx();
