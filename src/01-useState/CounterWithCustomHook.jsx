import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
	const { counter, increment, reset } = useCounter(5);

	/*onClick={increment}
    esta instrucción pasa el evento como primer parametro
    a la función increment o lo que sería lo mismo que
    onClick = {(event)=> increment(event)}
    por eso si se quiere pasar pasar parametros a la función increment,
    se debe escribir la estructura completa de la funcion de flecha
    onClick = {(event)=> increment(valor)}
    se puede obviar el event
    onClick = {()=> increment(valor)}

    en el caso del reset no es necesario escribir toda la estructura
    debido a que en la función no se usa el evento ni ningún parametro
    */

	return (
		<>
			<h1>Counter with custom hook: {counter}</h1>
			<hr />
			<button className="btn btn-primary" onClick={() => increment(1)}>
				+1
			</button>
			<button className="btn btn-primary" onClick={reset}>
				Reset
			</button>
			<button className="btn btn-primary" onClick={() => increment(-1)}>
				-1
			</button>
		</>
	);
};

export default CounterWithCustomHook;
