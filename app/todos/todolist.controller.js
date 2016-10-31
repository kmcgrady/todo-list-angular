class TodoListCtrl {
  constructor() {
    this.todoToAdd = '';
    this.todos = [];
  }

  addTodo(todoText) {
    this.todos.push({
      completed: false,
      text: todoText
    });
    this.todoToAdd = '';
  }
}

export default TodoListCtrl;
