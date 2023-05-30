function hello(datas:any):any{ 
      return datas           //parameter can be any type return can be any type

}
function helloone<Type>(valu:Type):Type{
      return valu

}//if any value came that type will be loacked and must needs to return that same type from that method
function hellotwo<T>(valuez:T):T{
      return valuez
}//same as helloone method

function hellothree<T>(prod:T[]):T{
      return prod[3]
}
let hellofour=<T>(pro:T[]):T=>{
      return pro[3]
}