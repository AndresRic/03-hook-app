import Message from "./Message";
import { useEffect, useState } from "react";

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
	});

	const { username, email } = formState;

	/*  abajo se usa la desestructutracion anidada del event: { target: { name, value }}
        es igual a las siguientes 2 lineas de codigo
        const {target}=event
        const {username, email} = target
     */
	const onInputChange = ({ target: { name, value } }) => {
		setFormState({ ...formState, [name]: value });
	};

	useEffect(() => {
		console.log("useEfect called");
	}, []);

	useEffect(() => {
		console.log("formState changed");
	}, [formState]);

	useEffect(() => {
		console.log("username changed");
	}, [formState.username]);

	useEffect(() => {
		console.log("email changed");
	}, [formState.email]);

	return (
		<>
			<h1>Formulario simple</h1>
			<hr />
			<input
				onChange={onInputChange}
				type="text"
				className="form-control"
				name="username"
				placeholder="Username"
				value={username}
			/>

			{username === "ric" && <Message />}
			<input
				onChange={onInputChange}
				type="text"
				className="form-control mt-2"
				name="email"
				placeholder="Email"
				value={email}
			/>
		</>
	);
};

export default SimpleForm;
