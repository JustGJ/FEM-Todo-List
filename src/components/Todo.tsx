import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCheckedTodo, deleteTodo, editTodo } from '../redux/actions/todo.actions';
import cross from '../images/icon-cross.svg';
import { ITodo } from '../redux/interface';

const Todo: React.FC<ITodo> = ({ id, todo, checked }) => {
	const [inputContent, setInputContent] = useState<string>(todo);
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const dispatch = useDispatch();

	const handleValidEditTodo = () => {
		if (inputContent !== '') {
			dispatch(editTodo({ id, inputContent }));
			setIsEdit(!isEdit);
		}
	};

	const handleChangeCheckedTodo = (e: any) => {
		isEdit && setIsEdit(!isEdit);
		dispatch(changeCheckedTodo({ id, checked: e.target.checked }));
	};
	const handleEditTodo = () => {
		setIsEdit(!isEdit);
	};

	return (
		<div className="todo">
			<label className="todo__checker">
				<input
					className="checker__input"
					type="checkbox"
					checked={checked}
					onChange={handleChangeCheckedTodo}
				/>
				<div className="checker__custom"></div>
			</label>
			<div className="todo__content">
				{isEdit ? (
					<input
						className={`${checked ? 'todo__content__checked' : ''}`}
						type="text"
						value={inputContent}
						onChange={e => setInputContent(e.target.value)}
					/>
				) : (
					<span className={`${checked ? 'todo__content__checked' : ''}`}>
						{inputContent}
					</span>
				)}
			</div>
			<div className="todo__option">
				{isEdit ? (
					<i className="fas fa-plus" onClick={handleValidEditTodo}></i>
				) : (
					<i className="far fa-edit" onClick={handleEditTodo}></i>
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
