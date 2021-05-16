import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoAdd = () => {
    return (
        <div className="todoAdd">
            <div className="todoAdd__icon">
                <i class="fas fa-plus"></i>
            </div>
            <input type="text" placeholder="Create a new todo ..." />
        </div>
    );
};

export default TodoAdd;
