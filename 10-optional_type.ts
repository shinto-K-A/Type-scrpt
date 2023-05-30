type cardNumber={
      cardno:string

}
type cardDate={
      date:string
}
type cardDetails=cardNumber & cardDate & {
      details:string
}
let person:cardDetails={
      cardno:'kl',
      details:'hi',
      date:'op'
}
export {}