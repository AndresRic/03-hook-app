import { useState } from "react";

const CounterApp = () => {
	// const [{ counter1, counter2, counter3 }, setCounter] = useState({
	const [state, setCounter] = useState({
		counter1: 1,
		counter2: 10,
		counter3: 100,
	});

	const { counter1, counter2, counter3 } = state;

	return (
		<>
			<h1>CounterApp: {counter1}</h1>
			<h1>CounterApp: {counter2}</h1>
			<h1>CounterApp: {counter3}</h1>
			<hr />
			<button
				className="btn btn-primary"
				onClick={() => {
					setCounter({
						...state,
						counter1: counter1 + 1,
					});
				}}
			>
				+1
			</button>
		</>
	);
};

export default CounterApp;
