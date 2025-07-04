// object literal

const user = {
    username : "venktesh" , 
    login_count :8 , 
    signedin : true,
    getuserdetail : function(){
        console.log("DB detail fetched");
        console.log(this.username);
        console.log(user.username)
        // console.log(username) 
        // this will throw error because js dont know which username you are talking 
        console.log(this)  // it will give you op of current context

        
    }
}

console.log(user.login_count)
console.log(user.getuserdetail());
console.log(this) // if it is in browser it will give windows object


//## constructor function

function userdetail(name , age , number){
    this.name = name;
    this.age = age;
    this.number = number;

}
let usr1 = new userdetail("venktesh" , 10 , 7999664551)
console.log(usr1)
 // we use the new keyword to avoid  override the value
let usr2 = new userdetail("xyz" , 2 , 40)
console.log(usr2)