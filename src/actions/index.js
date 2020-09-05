import axios from 'axios'
import { v4 } from 'uuid'
import { SET_TODO, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './type'

export const setInitailTodo = () => async (dispatch) => {
    const { data, status } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
    );
    if (status === 200) {
        dispatch({
            type: SET_TODO,
            payload: data,
        });
    }
};

export const addNewTodo = (title) => async (dispatch) => {
    const { data, status } = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
            userId: '',
            id: v4(),
            title,
            computed: false,
        }
    );
    if (status === 201) {
        dispatch({
            type: ADD_TODO,
            payload: data,
        });
    }
};

export const toggleNewTodo = (id, completed) => async (dispatch) => {
    const { data, status } = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            completed,
        }
    );
    if (status === 200) {
        dispatch({
            type: TOGGLE_TODO,
            payload: data,
        });
    }
}

export const removeDataTodo = (id) => async (dispatch) => {
    const { status } = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (status === 200) {
        dispatch({
            type: DELETE_TODO,
            payload: id,
        });
    }
}