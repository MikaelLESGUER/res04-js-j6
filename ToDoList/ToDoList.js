    // Définition de la classe Task
    class Task {
      constructor(description) {
        this.description = description;
      }

      render() {
        const li = document.createElement('li');
        li.textContent = this.description;
        return li;
      }
    }

    // Définition de la classe TodoList
    class TodoList {
      constructor() {
        this.tasks = [];
      }

      addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
        console.log(this.tasks)
      }

      render() {
        const todoListElement = document.getElementById('todoList');
        todoListElement.innerHTML = '';

        this.tasks.forEach(task => {
          const taskElement = task.render();
          todoListElement.appendChild(taskElement);
        });
      }
    }
    
    export {TodoList} 