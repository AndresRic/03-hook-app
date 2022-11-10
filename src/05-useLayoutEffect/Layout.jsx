import { useCounter, useFetch } from "../hooks";
import { LoadingQoute, Quote } from "../03-examples";

const baseUrl = "https://www.breakingbadapi.com/api/quotes/";

export const Layout = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError, getFetch } = useFetch(`${baseUrl}1`);

	//se niega dos veces data para que en caso de que data sea undefined, pase a true y
	//luego a false y no sea undefined
	const { quote, author } = !!data && data[0];

	const handClick = () => {
		increment(1); //incrementar el contador
		const newUrl = `${baseUrl}${counter + 1}`; //se suma 1 al counter por que en este renderizado el valor de counter no cambia
		getFetch(newUrl);
	};

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{isLoading ? <LoadingQoute /> : <Quote phrase={quote} who={author} />}

			<button className="btn btn-primary" disabled={isLoading} onClick={handClick}>
				Next Quote
			</button>
		</>
	);
};

// export default MultipleCustomHooks;
