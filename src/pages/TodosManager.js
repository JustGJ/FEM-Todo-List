import React from 'react';
import TodoAdd from '../components/TodoAdd';
import TodoHeader from '../components/TodoHeader';
import Todo from '../components/Todo';

import { useSelector } from 'react-redux'


const TodosManager = ( { darkMode, setDarkMode }) => {

    const todos = useSelector(state => state.todos)
    console.log(todos);

    return (
        <div className="todoManager">
            <TodoHeader darkMode={darkMode} setDarkMode={setDarkMode} />
            <TodoAdd />
            <Todo />
        </div>
    );
};

export default TodosManager; 
