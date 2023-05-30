class company{
      private email:string
      public name:string
      readonly data:string='hi all'
      constructor(name:string,email:string){
            this.name=name,
            this.email=email
      }

}
let obj=new company('ska','hi@gmail.com')
obj.data
