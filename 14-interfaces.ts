interface Users{
      readonly dbno:number,
      name:string,
      details?:string,        //Here Details is optional
      //print:()=>string,       //Not a good way
      display():string,        //This is a good practice
      coupon(data:string):number

}
interface Users{
      googleId:number         //REOPENING of the interface
}
let persons:Users={
      dbno:90,
      name:'ska',
      display:()=>{
            return ''
      },
      coupon:(val:'hi')=>{          //instead of data we can give any name
            return 55
      },
      googleId:22
     
}
//-----------------------------------------------------------------------//
//INHERITANCE//
interface poison{
      name:string,
      age:number
}
interface Admin extends poison{
      status:'success'|'failed'
}
let person2:Admin={
      name:'from poison',
      age:1,
      
      status:'failed'
}