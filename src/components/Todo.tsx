import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCheckedTodo, deleteTodo, editTodo } from '../redux/actions/todo.actions';
import cross from '../images/icon-cross.svg';
import { ITodo } from '../redux/interface';
import { Droppable } from 'react-beautiful-dnd';

const Todo: React.FC<ITodo> = ({ id, todo, checked }) => {
	const [inputContent, setInputContent] = useState<string>(todo);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const input = useRef(null);

	const dispatch = useDispatch();

	const handleValidEditTodo = (): void => {
		if (inputContent !== '') {
			dispatch(editTodo({ id, inputContent }));
			setIsEdit(!isEdit);
		}
	};

	const handleChangeCheckedTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (inputContent !== '') {
			dispatch(changeCheckedTodo({ id, checked: e.target.checked }));
			isEdit && setIsEdit(!isEdit);
		}
	};

	const onDragEnd = () => {
		console.log('toto');
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
						ref={input}
						className={`${checked ? 'todo__content__checked' : ''}`}
						type="text"
						value={inputContent}
						onChange={e => setInputContent(e.target.value)}
						maxLength={40}
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
					<i className="far fa-edit" onClick={() => setIsEdit(!isEdit)}></i>
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
