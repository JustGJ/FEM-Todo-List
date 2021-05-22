// Notre state doit avoir ce moule
export interface IState {
    todos: Array<{id: string; todo: string; checked: boolean}> 
};

export interface ITodo {
    id: string,
    todo: string,
    checked: boolean
};

// == Notre action doit avoir ce moule
export interface IAction {
    type: string,
    payload: any
}

