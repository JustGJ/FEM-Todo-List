import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todo.actions';

const TodoAdd = () => {

    const [inputValue, setInputValue] = useState<string>('')

    const dispatch = useDispatch()

    const newTodo = ():void => {
        inputValue !== '' &&
        dispatch(addTodo(inputValue));
        setInputValue('');
    }

    return (
        <div className="todoAdd">
            <div className="todoAdd__icon">
                <i className="fas fa-plus" onClick={() => newTodo()}></i>
            </div>
            <input 
                type="text" 
                placeholder="Create a new todo ..." 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                // maxLength="35"
            />
        </div>
    );
};

export default TodoAdd;
