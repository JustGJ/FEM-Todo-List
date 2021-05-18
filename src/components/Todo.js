import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCheckedTodo, deleteTodo } from '../redux/actions/todo.actions';
import cross from '../images/icon-cross.svg';

const Todo = ({ id, todo, checked }) => {
	const [inputContent, setInputContent] = useState(todo);
	const [isEdit, setIsEdit] = useState(false);

	const dispatch = useDispatch();

	return (
		<div className="todo">
			<label className="todo__checker">
				<input
					className="checker__input"
					type="checkbox"
					checked={checked}
					onChange={e => dispatch(changeCheckedTodo({ id, checked: e.target.checked }))}
				/>
				<div className="checker__custom"></div>
			</label>
			<div className="todo__content">
				{isEdit ? (
					<input type="text" value="modification" />
				) : (
					<span className={`${checked ? 'todo__content__checked' : ''}`}>
						{inputContent}
					</span>
				)}
			</div>
			<div className="todo__option">
				{isEdit ? (
					<i className="fas fa-plus"></i>
				) : (
					<i className="far fa-edit" onClick={() => setIsEdit(true)}></i>
				)}

				<img
					className="cross"
					src={cross}
					alt="cross"
					onClick={() => dispatch(deleteTodo(id))}
				/>
			</div>
		</div>
	);
};

export default Todo;
