type Product = {
	id: string;
	name: string;
	price: number;
};

const products = [
	{ id: "P001", name: "Laptop", price: 3000 },
	{ id: "P002", name: "Mouse", price: 80 },
	{ id: "P003", name: "Keyboard", price: 200 },
];

// Exercise 1 :return ["Laptop - RM3000", "Mouse - RM80", "Keyboard - RM200"]

console.log(
	products.map((prod) => {
		return prod.name + " - RM" + prod.price;
	}),
);

// Exercise 2: From products, return only products with price above 100.

console.log(
	products.filter((prod) => {
		return prod.price > 100;
	}),
);

// Exercise 3: Find the product with id P002.

console.log(products.find((prod) => prod.id === "P002"));

// Exercise 4: Check if there is any product below RM100.

console.log(
	"Any Product below RM100?",
	products.some((prod) => prod.price < 100),
);

// Exercise 5: Check if all products are above RM50.

console.log(
	"Are all products above RM50?",
	products.every((prod) => {
		return prod.price > 50;
	}),
);

// Exercise 6: Calculate theprice of all rpoduct

console.log(
	"Price of all products: ",
	products.reduce((total, prod) => {
		return total + prod.price;
	}, 0),
);

// Exercise 7: Return names of products above RM100.

console.log(
	"Products that are above RM100",
	products
		.filter((prod) => {
			return prod.price > 100;
		})
		.map((prod) => {
			return prod.name;
		}),
);
