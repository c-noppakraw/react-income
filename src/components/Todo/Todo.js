import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setInitailTodo } from '../../actions'
import NewTodo from './FormTodo'
import TodoList from './TableTodo'

function Todo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInitailTodo(), [dispatch]);
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h1>Todo</h1>
                    <NewTodo />
                    <TodoList />
                <div>
            </div>
            </div>

            </div>
        </div>
    )
}

export default Todo
