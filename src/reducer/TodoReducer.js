import { SET_TODO, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/type'
import Todo from '../components/Todo/Todo';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO : {
            return (state = [...action.payload]);
        }
        case ADD_TODO : {
            return (state = [action.payload, ...state]);
        }
        case TOGGLE_TODO : {
            const updateTodo = state.map((Todo) => {
                if (Todo.id === action.payload.id) {
                    Todo = action.payload;
                }
                return Todo;
            });
            return (state = updateTodo);
        }
        case DELETE_TODO : {
            const del = state.filter((Todo) => Todo.id !== action.payload);
            return (state = del);
        }
        default:
            return state;
    }
}