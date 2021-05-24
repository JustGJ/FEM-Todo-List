import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoHeader from '../components/TodoHeader';
import { ITodo } from '../redux/interface';
import TodoAdd from '../components/TodoAdd';
import Todo from '../components/Todo';
import TodoFilter from '../components/TodoFilter';
import { DragDropContext } from 'react-beautiful-dnd';
export interface IDarkMode {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodosManager: React.FC<IDarkMode> = ({ darkMode, setDarkMode }) => {
	const todos: Array<ITodo> = useSelector((state: any) => state);
	const [selectFilter, setSelectFilter] = useState<string>('all');

	console.log(selectFilter);
	return (
		<div className="todoManager">
			<TodoHeader darkMode={darkMode} setDarkMode={setDarkMode} />
			<TodoAdd />

			<div>
				{todos
					.filter(todo => {
						if (selectFilter === 'all') return true;
						else if (selectFilter === 'active') return !todo.checked && true;
						else if (selectFilter === 'completed') return todo.checked && true;
						else if (selectFilter === 'clear') return false;
						return true;
					})
					.map(todo => {
						return (
							<Todo
								key={todo.id}
								id={todo.id}
								todo={todo.todo}
								checked={todo.checked}
							/>
						);
					})}
			</div>
			<TodoFilter todos={todos} setSelectFilter={setSelectFilter} />
		</div>
	);
};

export default TodosManager;
