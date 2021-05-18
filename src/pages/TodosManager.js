import React from 'react';
import TodoAdd from '../components/TodoAdd';
import TodoHeader from '../components/TodoHeader';
import Todo from '../components/Todo';

import { useSelector } from 'react-redux';

const TodosManager = ({ darkMode, setDarkMode }) => {
	const todos = useSelector(state => state);

	const todosDisplay = todos.map(todo => {
		return (
			<Todo
				key={todo.id}
				id={todo.id}
				todo={todo.todo}
				checked={todo.checked}
			/>
		);
	});

	return (
		<div className="todoManager">
			<TodoHeader darkMode={darkMode} setDarkMode={setDarkMode} />
			<TodoAdd />
			{todosDisplay}
		</div>
	);
};

export default TodosManager;
