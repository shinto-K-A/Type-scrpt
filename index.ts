let name=100.99
name.toFixed()
console.log(name);
const myFun=(num:number):string=>{
      return ''//THIS FUNCTION GIVE AS STRING THEN NEEDS TO RETURN A STRING ATLEAT AN EMPTY STRING
}
function errorFind(err:string):void{
      console.log(err);       //if nothing is to return fron function that will be a void function
      
}
function toThrow(err:string):never{       //if use THROW in function give NEVER as the functions type
      throw new Error(err)
}
//ALIASES
type User={
      name:string;
      age:number
}
function userData(details:User):User{
      return {name:"",age:29}
}
console.log(userData({name:'shinto',age:25}));


export{}
