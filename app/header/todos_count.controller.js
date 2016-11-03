class TodosCountCtrl {
  constructor(todosSvc) {
    this.todosSvc = todosSvc;
  }

  notCompletedCount() {
    return this.todosSvc.notCompletedTodos().length
  }
}

TodosCountCtrl.$inject = ['TodosService'];

export default TodosCountCtrl;
