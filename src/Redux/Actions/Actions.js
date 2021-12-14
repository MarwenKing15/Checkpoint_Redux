import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "./ActionsTypes";

export const add_task = (payload) => {
	return {
		type: ADD_TASK,
		payload,
	};
};

export const remove_task = (payload) => {
	return {
		type: REMOVE_TASK,
		payload,
	};
};

export const update_task = (payload) => {
	return {
		type: UPDATE_TASK,
		payload,
	};
};
