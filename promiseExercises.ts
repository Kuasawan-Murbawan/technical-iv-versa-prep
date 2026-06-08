function login(isValid: boolean): Promise<string> {
	return new Promise((resolve, reject) => {
		if (isValid) {
			resolve("Login Successfull");
		} else {
			reject("Invalid Credentials");
		}
	});
}

// login(true)
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

/*
Get User
↓
Get Orders
↓
Display Orders
*/

type User = {
	userID: string;
	name: string;
};

function getUser(currentUser: number): Promise<User> {
	return new Promise((resolve, reject) => {
		if (currentUser == 1) {
			resolve({
				userID: "us01",
				name: "afiq",
			});
		} else {
			reject({
				userID: "000",
				name: "Not found",
			});
		}
	});
}

type Order = {
	orderID: string;
	date: Date;
};

function getOrder(userID: string): Promise<Order> {
	return new Promise((resolve, reject) => {
		if (userID) {
			resolve({
				orderID: "ord001",
				date: new Date("December 18 2027"),
			});
		} else {
			reject({
				orderID: "error",
				date: new Date(),
			});
		}
	});
}

let user: any;

// getUser(1)
// 	.then((fetchedUser) => {
// 		console.log("User ID: ", fetchedUser.userID);
// 		console.log("Name: ", fetchedUser.name);

// 		getOrder(fetchedUser.userID)
// 			.then((result) => {
// 				console.log(result.orderID);
// 			})
// 			.catch((orderError) => {
// 				console.log("Error fetching order", orderError);
// 			});
// 	})
// 	.catch((userError) => {
// 		console.log("Error get user: ", userError);
// 	});

/*
        Exercise 5: Student Grades

        Create:

        getStudent()
        getGrades()
        calculateAverage()

        Chain all three together.

        Goal:

        Student Found
        ↓
        Grades Retrieved
        ↓
        Average Calculated
*/

type Student = {
	name: string;
	studentID: string;
};

function getStudent(name: string): Promise<Student> {
	return new Promise((resolve, reject) => {
		if (name == "afiq") {
			resolve({
				name: "Afiq Husyairi",
				studentID: "hus01",
			});
		} else {
			reject({
				name: null,
				studentId: null,
			});
		}
	});
}

type Grades = {
	studentID: string;
	Maths: number;
	English: number;
	Science: number;
};

function getGrades(studentID: string): Promise<Grades> {
	return new Promise((resolve, reject) => {
		if (studentID == "hus01") {
			resolve({
				studentID: studentID,
				Maths: 80,
				English: 80,
				Science: 80,
			});
		} else {
			reject({
				studentID: studentID,
				Maths: null,
				English: null,
				Science: null,
			});
		}
	});
}

// Record<key type, value type>

function calculateAverage(subjects: Record<string, number>) {
	const scores = Object.values(subjects);
	if (scores.length > 0) {
		let sum = 0;
		for (let elem of scores) {
			sum += elem;
		}
		return sum / scores.length;
	} else {
		return "Subjects Empty" + subjects;
	}
}

// getStudent("afiq")
// 	.then((fetchedStudent) => {
// 		console.log(fetchedStudent.studentID);
// 		getGrades(fetchedStudent.studentID)
// 			.then((grades) => {
// 				console.log(grades);
// 				console.log(
// 					"GPA: ",
// 					calculateAverage({
// 						Maths: grades.Maths,
// 						English: grades.English,
// 						Science: grades.Science,
// 					}),
// 				);
// 			})
// 			.catch((error) => {
// 				console.log("Error fetching grades", error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log("Error fetching students", error);
// 	});

getStudent("afiq")
	.then((fetchedStudent) => {
		console.log("Fetched Student:", fetchedStudent.studentID);
		return getGrades(fetchedStudent.studentID);
	})
	.then((grades) => {
		console.log("Grades: ", grades);
		const GPA = calculateAverage({
			Maths: grades.Maths,
			English: grades.English,
			Science: grades.Science,
		});
		console.log("GPA: ", GPA);
	})
	.catch((error) => {
		console.log("Error: ", error);
	});
