import React from "react";

export const TodoItem = ({ todo, onDelete, onToggle }) => {
	return (
		<li
			key={todo.id}
			className="list-gruop-item d-flex justify-content-between mb-2"
		>
			<span
				className={`align-self-center ${
					todo.done ? "text-decoration-line-through" : ""
				}`}
				onClick={() => onToggle(todo.id)}
			>
				{todo.description}
			</span>
			<button
				className="btn btn-danger"
				onClick={() => onDelete(todo.id)}
			>
				Borrar
			</button>
		</li>
	);
};
