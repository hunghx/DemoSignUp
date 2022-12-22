class User{
    username;
    email;
    password;
    constructor(username, email, password) { // phim tat Alt+Insert -> Constructor -> ctrl+A -> Enter
        this.username = username;
        this.email = email;
        this.password = password;
    }
    setUsername(username){
        this.username = username;
    }
    getUsername(){
        return this.username
    }
    setEmail(email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
    setPassword (password){
        this.password = password;
    }
    getPassword(){
        return this.password;
    }
}