import { TodoItem } from "./TodoItem";

export const TodoList = ({ list = [], onDelete, onToggle }) => {
	return (
		<>
			<ul className="list-group">
				{list.map((item) => {
					return (
						<TodoItem
							key={item.id}
							todo={item}
							onDelete={onDelete}
							onToggle={onToggle}
						/>
					);
				})}
			</ul>
		</>
	);
};
