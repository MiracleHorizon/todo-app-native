function toDoApp() {
    const todoList = document.querySelector('#todo-list');
    const todoForm = document.querySelector('#todo-form');
    const todoInputValue = document.querySelector('#todo-input');

    const addTodoButton = document.querySelector('#add-todo-button');
    const checkTodoButton = document.querySelector('#check-todo-button');
    const removeTodoButton = document.querySelector('#remove-todo-button');

    const sortButtonTodo = document.querySelector('#sort-button-todo');
    const sortButtonDone = document.querySelector('#sort-button-done');
    const sortButtonAll = document.querySelector('#sort-button-all');

    function createTodoItem() {
        function createTodoLiElement() {
            const todoLiElement = document.createElement('li');

            todoLiElement.id = 'todo-item';
            todoLiElement.classList.add('todo_item');
            todoLiElement.setAttribute('completed', 'false');

            return todoLiElement;
        }

        function createTodoInput() {
            const todoInput = document.createElement('input');

            todoInput.type = 'text';
            todoInput.classList.add('todo_item_task_input');
            todoInputValue.value === '' ? (todoInput.value = 'Empty task') : (todoInput.value = todoInputValue.value);

            return todoInput;
        }

        function todoStateHandler(todoInput, icon) {
            const inputParentEl = todoInput.parentElement;

            switch (inputParentEl.getAttribute('completed')) {
                case 'true':
                    inputParentEl.setAttribute('completed', 'false');

                    todoInput.style.textDecorationLine = 'none';
                    todoInput.style.textDecorationColor = 'none';
                    todoInput.style.textDecorationThickness = 'none';

                    icon.style.opacity = 0.4;
                    break;
                case 'false':
                    inputParentEl.setAttribute('completed', 'true');

                    todoInput.style.textDecorationLine = 'line-through';
                    todoInput.style.textDecorationColor = 'brown';
                    todoInput.style.textDecorationThickness = '0.15rem';

                    icon.style.opacity = 1;
                    break;
            }
        }

        function createNewTodo() {
            const todoLiElement = createTodoLiElement();
            const todoInputElement = createTodoInput();
            const todoStateButton = checkTodoButton.cloneNode(true);
            const todoRemoveButton = removeTodoButton.cloneNode(true);

            todoStateButton.style.display = 'initial';
            todoRemoveButton.style.display = 'initial';

            todoStateButton.addEventListener('click', () => todoStateHandler(todoInputElement, todoStateButton));
            todoRemoveButton.addEventListener('click', () => todoLiElement.remove());

            todoLiElement.append(todoInputElement, todoStateButton, todoRemoveButton);
            todoList.append(todoLiElement);
        }

        createNewTodo();
    }

    function sortTodos() {
        function sortByTodo() {
            sortButtonTodo.addEventListener('click', () => {
                Array.from(document.querySelectorAll('#todo-item')).forEach(todo => {
                    todo.getAttribute('completed') === 'false'
                        ? (todo.style.display = 'flex')
                        : (todo.style.display = 'none');
                });
            });
        }

        function sortByDone() {
            sortButtonDone.addEventListener('click', () => {
                Array.from(document.querySelectorAll('#todo-item')).forEach(todo => {
                    todo.getAttribute('completed') === 'true'
                        ? (todo.style.display = 'flex')
                        : (todo.style.display = 'none');
                });
            });
        }

        function sortByAll() {
            sortButtonAll.addEventListener('click', () => {
                Array.from(document.querySelectorAll('#todo-item')).forEach(todo => (todo.style.display = 'flex'));
            });
        }

        sortByTodo();
        sortByDone();
        sortByAll();
    }

    todoForm.addEventListener('submit', () => {
        createTodoItem();
        todoInputValue.value = '';
        todoInputValue.focus();
    });

    addTodoButton.addEventListener('click', () => {
        createTodoItem();
        todoInputValue.value = '';
        todoInputValue.focus();
    });

    sortTodos();
}

toDoApp();
