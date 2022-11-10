import { useMemo, useState } from "react";

export const MemoHook = () => {
	const [count, setCount] = useState(1);
	const [show, setShow] = useState(true);

	const heavyPreccess = (iterations) => {
		for (let index = 0; index < iterations; index++) {
			console.log(`iteration of heavy proccess`);
		}
	};

	/*
	 * solo se ejecutará la función heavyProccess cuando cambie count, mas no cuando
	 * cambie show, aunque el componente se vuelva a renderizar.
	 * a diferencia de useEfect que se ejecuta despues de cada renderizado, useMemo
	 * se ejecuta durante el renderizado, solo que de manera selectiva dependiendo
	 * de las dependencias
	 */
	useMemo(() => heavyPreccess(1000 + count), [count]);

	return (
		<>
			{show && <h1>Counter: {count}</h1>}

			<hr />
			<button className="btn btn-primary" onClick={() => setCount(count + 1)}>
				+1
			</button>
			<button className="btn btn-primary" onClick={() => setShow(!show)}>
				Show/Hide
			</button>
		</>
	);
};
