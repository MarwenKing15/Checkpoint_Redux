import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../Actions/ActionsTypes";

const initialState = {
	todolist: [],
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				todolist: [...state.todolist, action.payload],
			};

		case REMOVE_TASK:
			return {
				...state,
				todolist: state.todolist.filter((task) => task !== action.payload),
			};

		case UPDATE_TASK:
			return {
				...state,
				todolist: state.todolist.map((todo) =>
					todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
				),
			};

		default:
			return state;
	}
};

export default taskReducer;
