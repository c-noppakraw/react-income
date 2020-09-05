import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleNewTodo, removeDataTodo } from '../../actions'

const TableTodo = () => {
    const todoList = useSelector((state) => state.todo);

    const dispatch = useDispatch();

    const toggleTodo = (id, completed) => {
        dispatch(toggleNewTodo(id, completed), [dispatch]);
    }

    const removeTodo = (id) => {
        dispatch(removeDataTodo(id), [dispatch]);
    }

    const todoData = todoList.map((value, index) => (
        <tr key={value.id}>
            <td>{index + 1}</td>
            <td>{value.title}</td>
            <td>
                {value.completed ? (
                        <i className="fa fa-check"></i>
                    ) : (
                        <i className="fa fa-times"></i>
                )}
            </td>
            <td>
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => toggleTodo(value.id, !value.completed)}
                >
                {value.completed ? (
                        <i className="fa fa-times"></i>
                    ) : (
                        <i className="fa fa-check"></i>
                )}
                </button>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => removeTodo(value.id)}
                >
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    ));

    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>completed</th>
                            <th>Toger</th>
                        </tr>
                    </thead>
                    <tbody>{todoData}</tbody>
                </table>
            </div>
        </>
    )
}

export default TableTodo
