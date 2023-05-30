abstract class photo{  //cant create object for abstract classes if we inherit it to other then 
                              //that one can create object 
      constructor(size:string,date:string){

      }
}
class instagram extends photo{
      
}

//const xy=new photo('hai','hi')  canot create instanse for abstract class
const obje=new instagram('hi','Hi')
