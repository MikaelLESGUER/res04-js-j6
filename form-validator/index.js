import { user } from './user.js';



 // Récupération du formulaire
    const form = document.getElementById('userForm');

    // Fonction de gestion de la soumission du formulaire
    function handleSubmit(event) {
      event.preventDefault(); // Empêche le rechargement de la page

      // Récupération des valeurs des champs d'entrée
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const nickName = document.getElementById('nickName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const biography = document.getElementById('biography').value;
    
    // Affichage des valeurs d'un nouvel utilisateur dans la console (pour vérification)
    let newUser = new user (lastName, firstName, nickName, email, password, confirmPassword, biography);
    console.log(newUser);

    // Affichage des valeurs dans la console (pour vérification)
    // console.log('Nom:', lastName);
    // console.log('Prénom:', firstName);
    // console.log('Pseudo:', nickName);
    // console.log('Email:', email);
    // console.log('Mot de passe:', password);
    // console.log('Confirmation de mot de passe:', confirmPassword);
    // console.log('Biographie:', biography);
    }
    
    
window.addEventListener("DOMContentLoaded", function(){
    form.addEventListener('submit', handleSubmit);
    

    
});