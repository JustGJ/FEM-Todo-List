import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, CHANGE_CHECKED_TODO, DELETE_TODO } from '../actions/todo.actions';

const initialStateTodos = {
	todos: [
		{ id: uuidv4(), todo: 'Complete online javaScript course', checked: true },
		{ id: uuidv4(), todo: 'Jog around the park 3x', checked: false },
		{ id: uuidv4(), todo: '10 minutes meditation', checked: false },
		{ id: uuidv4(), todo: 'Read for 1 hour', checked: false },
		{ id: uuidv4(), todo: 'Pick up groceries', checked: false },
		{ id: uuidv4(), todo: 'Complete Todo App on Frontend Mentor', checked: false },
	],
};

const todosReducer = (state = initialStateTodos.todos, action) => {
	if (localStorage.getItem('todosData'))
		state = JSON.parse(localStorage.getItem('todosData'));

	switch (action.type) {
		case ADD_TODO:
			state = [...state, { id: uuidv4(), todo: action.payload, checked: false }];
			localStorage.setItem('todosData', JSON.stringify(state));
			return state;

		case CHANGE_CHECKED_TODO:
			return state.map(todo => {
				if (todo.id === action.payload.id) todo.checked = action.payload.checked;
				localStorage.setItem('todosData', JSON.stringify(state));
				return todo;
			});

		case DELETE_TODO:
			const todoIndex = state.findIndex(todo => todo.id === action.id);
			state.splice(todoIndex, 1);
			localStorage.setItem('todosData', JSON.stringify(state));
			return state;

		default:
			return state;
	}
};

export default todosReducer;
