let arr:number[]=[1,2,3]
let arr1:string[]=['a','b','c']
let arr3:number[] | string[]=[1,2,3]        //Either full number array or full string array
let arr4:(number | string)[]=[1,'hi','all',25]

let pie:3.14=3.14
//Real scinario
let seat:'mid' | 'ctr' | 'dwn'
seat='mid'

//OBJECT

let tier:{color:string,no:number} | {size:number,company:string}={
      size:37,company:'yu'
}
tier={color:'red',no:78}