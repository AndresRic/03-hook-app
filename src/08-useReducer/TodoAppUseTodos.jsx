import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks"; //importa desde el archivo index, donde está el export de todos los hooks en la caprtea

export const TodoAppUseTodos = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handelNewTodo,
		handleDelete,
		handleToggle,
	} = useTodos();

	return (
		<div className="container">
			<h1>
				TodoApp: {todosCount}
				<small> Pendientes: {pendingTodosCount}</small>
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
