import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompletedTodo } from '../redux/actions/todo.actions';
import { ITodo } from '../redux/interface';
import { useMediaQuery } from 'react-responsive';
interface IState {
	todos: Array<ITodo>;
	selectFilter: string;
	setSelectFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TodoFilter: React.FC<IState> = ({ todos, selectFilter, setSelectFilter }) => {
	const dispatch = useDispatch();
	const isTabletOrMobile: boolean = useMediaQuery({ query: '(max-width: 600px)' });

	return !isTabletOrMobile ? (
		<div className="todo__filter__desktop">
			<span>{todos.length} items left</span>
			<button
				className={` ${selectFilter === 'all' ? 'todo__filter__desktop__active' : ''}`}
				onClick={() => setSelectFilter('all')}>
				All
			</button>
			<button
				className={` ${
					selectFilter === 'active' ? 'todo__filter__desktop__active' : ''
				}`}
				onClick={() => setSelectFilter('active')}>
				Active
			</button>
			<button
				className={` ${
					selectFilter === 'completed' ? 'todo__filter__desktop__active' : ''
				}`}
				onClick={() => setSelectFilter('completed')}>
				Completed
			</button>
			<span onClick={() => dispatch(clearCompletedTodo())}>Clear completed</span>
		</div>
	) : (
		<div className="todo__filter__mobile">
			<div className="todo__filter__mobile__infos">
				<span>{todos.length} items left</span>
				<span onClick={() => dispatch(clearCompletedTodo())}>Clear completed</span>
			</div>

			<div className="todo__filter__mobile__select">
				<button
					className={` ${
						selectFilter === 'all' ? 'todo__filter__desktop__active' : ''
					}`}
					onClick={() => setSelectFilter('all')}>
					All
				</button>
				<button
					className={` ${
						selectFilter === 'active' ? 'todo__filter__desktop__active' : ''
					}`}
					onClick={() => setSelectFilter('active')}>
					Active
				</button>
				<button
					className={` ${
						selectFilter === 'completed' ? 'todo__filter__desktop__active' : ''
					}`}
					onClick={() => setSelectFilter('completed')}>
					Completed
				</button>
			</div>
		</div>
	);
};

export default TodoFilter;
