class TodosService {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  notCompletedTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
}

export default TodosService;
