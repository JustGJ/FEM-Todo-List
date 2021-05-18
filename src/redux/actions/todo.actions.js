export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_CHECKED_TODO = 'CHANGE_CHECKED_TODO';


export const addTodo = data => {
    return {
        type: ADD_TODO,
        payload: data 
    }
}

export const changeCheckedTodo = data => {
    console.log(data);
    return {
        type: CHANGE_CHECKED_TODO,
        payload: data 
    }
}

export const deleteTodo = data => {
    console.log(data);
    return {
        type: DELETE_TODO,
        payload: data 
    }
}
