import { useEffect, useReducer } from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { todoReducer } from "./todoReducer";

const init = () => {
	//retornamos parseado lo que haya en el local storage o si no hay nada devolvemos un array vacio
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handelNewTodo = (newTodo) => {
		const action = {
			type: "[TODO] Add Todo",
			payload: newTodo,
		};

		dispatch(action);
	};

	const handleDelete = (id) => {
		const action = {
			type: "[TODO] Delete Todo",
			payload: id,
		};

		dispatch(action);
	};

	const handleToggle = (id) => {
		const action = {
			type: "[TODO] Toggle Todo",
			payload: id,
		};

		dispatch(action);
	};

	return (
		<div className="container">
			<h1>
				Todo App 10, <small>Pendientes 2</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						list={todos}
						onDelete={handleDelete}
						onToggle={handleToggle}
					/>
				</div>

				<div className="col-5">
					<h4>Agregar Todo</h4>
					<hr />
					<TodoAdd onAddTodo={(todo) => handelNewTodo(todo)} />
				</div>
			</div>
		</div>
	);
};
