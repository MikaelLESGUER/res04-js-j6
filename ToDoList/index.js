    import { TodoList } from './ToDoList.js';
    
    // Création d'une instance de TodoList
    const todoList = new TodoList();

    // Fonction d'événement pour le bouton "Ajouter une tâche"
    function addTask() {
      const description = prompt('Entrez une description de tâche :');
      todoList.addTask(description);
      todoList.render();
    }

    // Écouteur d'événement pour le clic sur le bouton "Ajouter une tâche"
    const addTaskButton = document.getElementById('addTaskButton');
    
    window.addEventListener("DOMContentLoaded", function(){
    
    addTaskButton.addEventListener('click', addTask);
    
});