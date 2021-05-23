// Notre state doit avoir ce moule
export interface ITodos extends Array<ITodo> {
	id: string;
	todo: string;
	checked: boolean;
}
export interface ITodo {
	id: string;
	todo: string;
	checked: boolean;
}

export interface IAction {
	type: string;
	payload: any;
}
