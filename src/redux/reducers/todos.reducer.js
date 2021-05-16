import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO } from '../actions/todo.actions';


const initialStateComments = {
    todos:  [
        {id : uuidv4(), todo : "Complete online javaScript course", checked : true },
        {id : uuidv4(), todo : "Jog around the park 3x", checked : false },
        {id : uuidv4(), todo : "10 minutes meditation", checked : false },
        {id : uuidv4(), todo : "Read for 1 hour", checked : false },
        {id : uuidv4(), todo : "Pick up groceries", checked : false },
        {id : uuidv4(), todo : "Complete Todo App on Frontend Mentor", checked : false },
    ]
}

const todosReducer = (state = initialStateComments, action) => {

    switch (action.type) {
        case ADD_TODO : 
            return {
               
            }
        default: return state;
    }
}

export default todosReducer;