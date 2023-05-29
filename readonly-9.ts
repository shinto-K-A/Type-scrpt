type User={
      readonly _id:string
      name:string
      isActive:boolean
}
let myUser:User={
      _id:'123',
      name:'abc',
      isActive:true
}
//myUser._id='222'        //cant perform this operation because it is readonly
export{}