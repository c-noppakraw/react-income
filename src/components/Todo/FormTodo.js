import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../../actions'

const FormTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(title), [dispatch]);
        setTitle('');
    }

    return (
        <>
            <form className="form-inline" onSubmit={e => handleSubmit(e)}>
                <label className="sr-only">Name</label>
                <input 
                type="text" 
                className="form-control mb-2 mr-sm-2" 
                placeholder="Todo"
                value={title}
                name="title"
                onChange={e => setTitle(e.target.value)}
                />

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </>
    )
}

export default FormTodo
