/*
    Implement a class `Todo` having below methods
      - add(todo): adds todo to list of todos
      - remove(indexOfTodo): remove todo from list of todos
      - update(index, updatedTodo): update todo at given index
      - getAll: returns all todos
      - get(indexOfTodo): returns todo at given index
      - clear: deletes all todos

    Once you've implemented the logic, test your code by running
  */

  class Todo {
    constructor() {
      this.tasks = [];
    }

    add(task) {
      this.tasks.push(task);
    }

    remove(idxOfTask) {
      if (idxOfTask >= 0 && idxOfTask < this.tasks.length) {
        this.tasks.splice(idxOfTask, 1);
      }
    }

    update(idxOfTask, updatedTask) {
      if (idxOfTask >= 0 && idxOfTask < this.tasks.length) {
        this.tasks[idxOfTask] = updatedTask;
      }
    }

    getAll() {
      return this.tasks;
    }
    
    get(idxOfTask) {
      return idxOfTask >= 0 && idxOfTask < this.tasks.length
        ? this.tasks[idxOfTask]
        : null;
    }
    
    clear() {
      this.tasks.length = 0;
    }
  }
module.exports = Todo;

// const todo = new Todo();
// todo.add('Driving');
// todo.add('Climbing');
// todo.add('Working');
// console.log('All tasks:', todo.getAll());
// todo.add('Sleeping');
// console.log('Updated tasks:', todo.getAll());

