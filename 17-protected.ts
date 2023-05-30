//private only get in same class not get in extended class
//protect get in same and extended class
class Popy{
      private nameOf:string='happy'
      protected counts:number=1
}
class Johnson extends Popy{
      colorsz:string='red'
      counts=10
      //nameOf='hi'  this is private of class Popy

}