
class TodoFooterController {
  constructor(todoManager) {
    "ngInject";
    this.todos = todoManager;
  }

  clearCompleted() {
    this.todos.clearCompleted();
  }
}

export default {
  bindings: {},
  template: `
    <footer class="footer">
      <span class="todo-count">
        {{todoFooter.todos.notCompletedCount()}} {{todoFooter.todos.notCompletedCount() == 1 ? 'todo' : 'todos'}} left
      </span>
      <ng-transclude></ng-transclude>
      <button
        class="clear-completed"
        ng-click="todoFooter.clearCompleted()"
        ng-show="todoFooter.todos.completedCount() >= 1">
        Clear Completed ({{ todoFooter.todos.completedCount() }})
      </button>
    </footer>
  `,
  controller: TodoFooterController
}
