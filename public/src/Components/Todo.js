import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import './Allcss.css'
import { addTodo, deleteTodo, updateTodo,setTodo,getTodo } from '../Store/action'

const Todo = ({ todoListItem, addTodo, deleteList, editTodo,setTodo,getTodo }) => {

    useEffect(()=>{
        getTodo()
        console.log('hello')
    },[getTodo])

    const [todoItem, setTodoItem] = useState('')
    const [editItem, setEditItem] = useState('')
    return (
        <div>
            <div className='todo-input'>
                <input onChange={(e) => setTodoItem(e.target.value)} value={todoItem} type='text' />
                <button onClick={() => { addTodo(todoItem); setTodoItem('') }}>Enter Todos</button>
            </div>
            <div className='todo-container'>
                {todoListItem.map((todo, i) => {
                    return (
                        <div key={todo._id} className='todo-list'>
                            {todo.edit ? <input type='text' value={todo.todoitem} onChange={(e) => setEditItem(e.target.value)} /> : <span>{todo.todo}</span>}
                            <div>
                                <button className='delete' onClick={() => { deleteList(todo._id) }}>Delete</button>
                                {todo.edit ?
                                    <button className='edit' onClick={() => {setTodo(i,editItem,todo._id)}}>Update</button> :
                                    <button className='edit' onClick={() => editTodo(i)}>Edit</button>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todoListItem: state.todoreducer.todo
})

const mapDispatchToProps = dispatch => ({
    addTodo: (todoItem) => dispatch(addTodo(todoItem)),
    deleteList: (id) => dispatch(deleteTodo(id)),
    editTodo: (id) => dispatch(updateTodo(id)),
    setTodo: (id,todoValue,uri) => dispatch(setTodo(id,todoValue,uri)),
    getTodo: () => dispatch(getTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
