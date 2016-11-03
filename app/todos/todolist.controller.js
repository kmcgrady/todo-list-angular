class TodoListCtrl {
  constructor(todosSvc) {
    this.todosSvc = todosSvc;
    this.todoToAdd = '';
    this.todos = [];
  }

  addTodo(todoText) {
    const todo = {
      completed: false,
      text: todoText
    };

    this.todos.push(todo);
    this.todosSvc.addTodo(todo);
    this.todoToAdd = '';
  }
}

TodoListCtrl.$inject = ['TodosService'];

export default TodoListCtrl;
