import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
	const { username, email, password, onInputChange, resetForm } = useForm({
		username: "",
		email: "",
		password: "",
	});

	//Tambien se podría hacer de esta manera
	// const { formState, onInputChange } = useForm({
	// 	username: "",
	// 	email: "",
	// 	password: "",
	// });
	//
	// const { username, email, password } = formState;

	const onResetForm = () => {
		resetForm();
	};

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

			<input
				onChange={onInputChange}
				type="text"
				className="form-control mt-2"
				name="email"
				placeholder="Email"
				value={email}
			/>

			<input
				onChange={onInputChange}
				type="password"
				className="form-control mt-2"
				name="password"
				placeholder="Password"
				value={password}
			/>

			<button onClick={onResetForm} className="btn btn-primary mt-2">
				Reset
			</button>
		</>
	);
};

export default FormWithCustomHook;
