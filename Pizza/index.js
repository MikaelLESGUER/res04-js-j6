import { Pizza } from './pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    
let pizzaVeggie = new Pizza ("Veggie", "tomate", "fromage", "légumes");
let pizzaMeattie = new Pizza ("Meattie", "tomate", "fromage", "viande");
let pizzaFishie = new Pizza ("Fishie", "tomate", "fromage", "poisson");
console.log(pizzaVeggie);
console.log(pizzaMeattie);
console.log(pizzaFishie);
    
});