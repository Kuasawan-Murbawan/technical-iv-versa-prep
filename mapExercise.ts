function mapEx() {
	const exercises = [
		{
			exerciseID: 1,
			exerciseName: "Bench Press",
		},
		{
			exerciseID: 2,
			exerciseName: "Squat",
		},
		{
			exerciseID: 3,
			exerciseName: "Deadlift",
		},
	];

	const sets = [
		{
			setNumber: 1,
			weight: 80,
			reps: 10,
		},
		{
			setNumber: 2,
			weight: 85,
			reps: 8,
		},
	];

	exercises.map((exercise) => {
		// console.log(exercise.exerciseName);
	});

	sets.map((set) => {
		console.log(
			"Set " + set.setNumber + ": " + set.weight + "kg x " + set.reps,
		);
	});
}

mapEx();
