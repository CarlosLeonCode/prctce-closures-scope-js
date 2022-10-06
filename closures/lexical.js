function myFunction(){
  const global = 'Global'
  console.log(global)

  function parent(){
    const parent = 'Parent'
    console.log(global, parent)

    function child(){
      // Here we can access to all parent variable definitions
      const child = 'Child'
      console.log(global, parent, child)
    }
    return child();
  }
  return parent();
}

myFunction();
