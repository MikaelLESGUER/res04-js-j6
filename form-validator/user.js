class user {
    lastName;
    firstName;
    nickName;
    email;
    password;
    confirmPassword;
    biography;
    
    constructor (lastName, firstName, nickName, email, password, confirmPassword, biography=null) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.biography = biography;
    }
    
    get lastName (){
        return this.lastName;
    }
    get firstName (){
        return this.firstName;
    }
    get nickName (){
        return this.nickName;
    }
    get email (){
        return this.email;
    }
    get password (){
        return this.password;
    }
    get confirmPassword (){
        return this.confirmPassword;
    }
    get biography (){
        return this.biography;
    }
    
    set lastName (lastName){
        this.lastName = lastName;
    }
    set firstName (firstName){
        this.firstName = firstName;
    }
    set nickName (nickName){
        this.nickName = nickName;
    }
    set email (email){
        this.email = email;
    }
    set password (password){
        this.password = password;
    }
    set confirmPassword (confirmPassword){
        this.confirmPassword = confirmPassword;
    }
    set biography (biography){
        this.biography = biography;
    }
    validateFirstName() {
        let el = document.getElementById('firstName');
        let name = el.value;
        
        if (name.length > 0 && name.length < 2) {
      this.ShowError (el, "Veuillez entrer 2 caractères ou plus pour le nom.");
      return false
      }
    if (
      !name.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {;
      return false
      }
    return true
    }
    validateLastName() {
        
    }
    validateNickName(nameList) {
        
    }
    validateEmail() {
        
    }
    validatePassword(){
        
    }
    validateBiography() {
        
    }
    validate() {
        
    }
}

export { user };