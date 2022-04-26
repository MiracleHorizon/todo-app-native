const toDoApp = () => {
    const todoList = document.querySelector('#todoList')
    const todoForm = document.querySelector('#todoForm')
    const todoInputField = document.querySelector('#todoInput')

    const addTodoButton = document.querySelector('#addTodoButton')
    const checkTodoButton = document.querySelector('#checkTodoButton')
    const removeTodoButton = document.querySelector('#removeTodoButton')

    const sortButtonTodo = document.querySelector('#sortButtonTodo')
    const sortButtonDone = document.querySelector('#sortButtonDone')
    const sortButtonAll = document.querySelector('#sortButtonAll')

    const createTodoItem = () => {
        const createTodoInput = () => {
            const todoInput = document.createElement('input')
            todoInput.type = 'text'
            todoInput.classList.add('todo_item_task_input')

            todoInputField.value === ''
                ? (todoInput.value = 'Empty task')
                : (todoInput.value = todoInputField.value)

            return todoInput
        }

        const createTodoLi = () => {
            const todoLi = document.createElement('li')

            todoLi.id = 'todoItem'
            todoLi.classList.add('todo_item')
            todoLi.setAttribute('completed', 'false')

            return todoLi
        }

        const todoStateCheck = (todoInput, icon) => {
            const inputParentEl = todoInput.parentElement

            switch (inputParentEl.getAttribute('completed')) {
                case 'false':
                    inputParentEl.setAttribute('completed', 'true')

                    todoInput.style.textDecorationLine = 'line-through'
                    todoInput.style.textDecorationColor = 'brown'
                    todoInput.style.textDecorationThickness = '0.15rem'

                    icon.style.opacity = '1'
                    break
                case 'true':
                    inputParentEl.setAttribute('completed', 'false')

                    todoInput.style.textDecorationLine = 'none'
                    todoInput.style.textDecorationColor = 'none'
                    todoInput.style.textDecorationThickness = 'none'

                    icon.style.opacity = '0.4'
                    break
            }
        }

        const createNewTodo = () => {
            // Эксперементировал со стилем названия константных переменных.
            const TODO_LI = createTodoLi()
            const TODO_INPUT = createTodoInput()

            const TASK_STATUS_BUTTON = checkTodoButton.cloneNode(true)
            const REMOVE_BUTTON = removeTodoButton.cloneNode(true)

            TASK_STATUS_BUTTON.removeAttribute('style')
            REMOVE_BUTTON.removeAttribute('style')

            TASK_STATUS_BUTTON.addEventListener('click', () =>
                todoStateCheck(TODO_INPUT, TASK_STATUS_BUTTON)
            )
            REMOVE_BUTTON.addEventListener('click', () => TODO_LI.remove())

            TODO_LI.append(TODO_INPUT)
            TODO_LI.append(TASK_STATUS_BUTTON)
            TODO_LI.append(REMOVE_BUTTON)

            todoList.append(TODO_LI)
        }

        createNewTodo()
    }

    const sortTodos = () => {
        const sortTodo = () => {
            sortButtonTodo.addEventListener('click', () => {
                Array.from(document.querySelectorAll('#todoItem')).forEach(
                    todo => {
                        todo.getAttribute('completed') === 'false'
                            ? (todo.style.display = 'flex')
                            : (todo.style.display = 'none')
                    }
                )
            })
        }

        const sortDone = () => {
            sortButtonDone.addEventListener('click', () => {
                Array.from(document.querySelectorAll('#todoItem')).forEach(
                    todo => {
                        todo.getAttribute('completed') === 'true'
                            ? (todo.style.display = 'flex')
                            : (todo.style.display = 'none')
                    }
                )
            })
        }

        const sortAll = () => {
            sortButtonAll.addEventListener('click', () => {
                Array.from(document.querySelectorAll('#todoItem')).forEach(
                    todo => (todo.style.display = 'flex')
                )
            })
        }

        sortTodo()
        sortDone()
        sortAll()
    }

    const addTodo = () => {
        submitFormTodo = () => {
            todoForm.addEventListener('submit', () => {
                createTodoItem()
                todoInputField.value = ''
                todoInputField.focus()
            })
        }

        addButtonTodo = () => {
            addTodoButton.addEventListener('click', () => {
                createTodoItem()
                todoInputField.value = ''
                todoInputField.focus()
            })
        }

        submitFormTodo()
        addButtonTodo()
    }

    addTodo()
    sortTodos()
}

toDoApp()
