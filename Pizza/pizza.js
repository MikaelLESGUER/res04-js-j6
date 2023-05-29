class Pizza {
    name;
    ingredients1;
    ingredients2;
    ingredients3;
    
    constructor (name, ingredients1, ingredients2, ingredients3) {
        this.name = name;
        this.ingredients1 = ingredients1;
        this.ingredients2 = ingredients2;
        this.ingredients3 = ingredients3;
    }
    
    get name (){
        return this.name;
    }
    get ingredients1 (){
        return this.ingredients1;
    }
    get ingredients2 (){
        return this.ingredients2;
    }
    get ingredients3 (){
        return this.ingredients3;
    }

    set name (name){
        this.name = name;
    }
    
    set ingredients1 (ingredients1){
        this.ingredients1 = ingredients1;
    }
    
    set ingredients2 (ingredients2){
        this.ingredients2 = ingredients2;
    }
    
    set ingredients3 (ingredients3){
        this.ingredients3 = ingredients3;
    }
}

export { Pizza };