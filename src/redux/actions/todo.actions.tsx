export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_CHECKED_TODO = 'CHANGE_CHECKED_TODO';

export const addTodo = (data: string) => {
    return {
        type: ADD_TODO,
        payload: data 
    }
}

export const changeCheckedTodo = (data: any) => {
    return {
        type: CHANGE_CHECKED_TODO,
        payload: data 
    }
}

export const deleteTodo = (data: string) => {
    return {
        type: DELETE_TODO,
        payload: data
    }
}
