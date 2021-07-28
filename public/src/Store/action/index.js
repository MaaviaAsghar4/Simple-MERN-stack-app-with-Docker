const getTodo = () => {
    return dispatch => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/todoitem')
                let data = await response.json()
                console.log(data)
                dispatch({ type: 'getTodo', payload: data })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }
}

const addTodo = (todo) => {
    const newTodo = { todo }
    return dispatch => {
        const addData = async () => {
            const response = await fetch('api/todoitem', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            });

            const fetchedData = await response.json()
            dispatch({ type: 'addTodo', payload: fetchedData })
        }
        addData();
    }
}

const deleteTodo = (id) => {
    return dispatch => {
        const deleteItem = async () => {
            const fetchTodo = await fetch(`api/todoitem/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })

            const data = await fetchTodo.json()
            console.log(data)
            dispatch({ type: 'deleteTodo', payload: id })
        }
        deleteItem()
    }
}

const updateTodo = (id) => {
    return dispatch => {
        dispatch({ type: 'updateTodo', payload: id })
    }
}

const setTodo = (id, todoValue, uri) => {
    return dispatch => {
        const updateItem = async () => {
            const updateValue = await fetch(`api/todoitem/${uri}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    todo:todoValue
                })
            })

            const updatedValue = await updateValue.json()
            console.log(updatedValue)

        }
        updateItem()
        dispatch({ type: 'setTodo', payload: { id, todoValue } })
    }
}

export {
    addTodo,
    deleteTodo,
    updateTodo,
    setTodo,
    getTodo,
}