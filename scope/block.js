function fruits(){
  // Whatever code inside some {}, is defined into a block
  if(true){
    var fruit1 = 'Apple'
    let fruit2 = 'Pineapple'
    const fruit3 = 'Banana'

    console.log(fruit2)
    console.log(fruit3)
  }
  console.log(fruit1)
  // console.log(fruit2) // This is not define, only inside block scope
  // console.log(fruit3) // This is not define, only inside block scope
}

fruits();
