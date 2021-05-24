import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompletedTodo } from '../redux/actions/todo.actions';
import { ITodo } from '../redux/interface';

interface IState {
	todos: Array<ITodo>;
	setSelectFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TodoFilter: React.FC<IState> = ({ todos, setSelectFilter }) => {
	const dispatch = useDispatch();

	return (
		<div className="todo__filter">
			<span>{todos.length} items left</span>
			<button className="todo__filter__all" onClick={() => setSelectFilter('all')}>
				All
			</button>
			<button className="todo__filter__active" onClick={() => setSelectFilter('active')}>
				Active
			</button>
			<button
				className="todo__filter__completed"
				onClick={() => setSelectFilter('completed')}>
				Completed
			</button>
			<span onClick={() => dispatch(clearCompletedTodo())}>Clear completed</span>
		</div>
	);
};

export default TodoFilter;
