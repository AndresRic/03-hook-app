import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onAddTodo }) => {
	const { description, onInputChange, resetForm } = useForm({
		description: "",
	});

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (description.length < 1) {
			console.log("todo sin descripcion");
			return;
		}
		const newTodo = {
			done: false,
			id: new Date().getTime(),
			description: description,
		};
		onAddTodo(newTodo);
		resetForm();
		return;
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				onChange={onInputChange}
				name="description"
				value={description}
				type="text"
				placeholder="¿Que hay que hacer?"
				className="form-control"
			/>
			<button type="submit" className="btn btn-outline-primary mt-1">
				Agregar
			</button>
		</form>
	);
};
