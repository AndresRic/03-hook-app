import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoAppUseTodos = () => {
	const { todos, handelNewTodo, handleDelete, handleToggle } = useTodos();

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
