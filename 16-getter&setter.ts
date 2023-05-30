class User{
      private _coursecount=1
      name:string
      email:string
      constructor(name:string,email:string){
            this.name=name
            this.email=email
      }
      get getAppleEmail():string{
            return `email${this.email}`
      }
      get coursecount():number{
            return this._coursecount
      }
      set courseCount(count:number){       //no type for set function
            if(count<=1){
                  throw new Error('coursecount should be more than one')
            }
            this._coursecount=count           

      }
}
let shi=new User('shi','sh@gmail.com')
//shi._coursecount            private is only accessible with in class 
console.log(shi.getAppleEmail);
