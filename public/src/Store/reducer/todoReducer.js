const todoList = {
    todo: []
}


const todos = (state = todoList, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'getTodo':
            return({
                ...state,
                todo: action.payload
            })
        case "addTodo":
            return ({
                ...state,
                todo: [action.payload, ...state.todo]
            })
        case "deleteTodo":
            return ({
                ...state,
                todo: state.todo.filter((todo => todo._id !== action.payload))
            })
        case "updateTodo": {
            const newTodo = [...state.todo]
            newTodo[action.payload].edit = true
            return ({
                todo: [...newTodo]
            })
        }
        case "setTodo":
            const newTodo = [...state.todo]
            newTodo[action.payload.id].todo = action.payload.todoValue
            newTodo[action.payload.id].edit = false
            return ({
                todo: [...newTodo]
            })
        default:
            return state
    }
}

export default todos