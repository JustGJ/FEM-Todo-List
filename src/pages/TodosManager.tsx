import React from 'react';
import { useSelector } from 'react-redux';
import TodoHeader from '../components/TodoHeader';
import { ITodo } from '../redux/interface'
import TodoAdd from '../components/TodoAdd';
import Todo from '../components/Todo';


export interface IDarkMode {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const TodosManager : React.FC<IDarkMode>  = ({ darkMode, setDarkMode }) => {
	const todos: any = useSelector(state  => state);

	const todosDisplay = todos.map((todo: ITodo) => {
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
