# Scopes

### What is the scope?

Scope is the range that the variables can have. This determines the range of accesibility to the variables, objects and functions.
We can have the below scopes:

- Global
- Function
- Global

> You can check the files inside **scope** folder to find examples

### Strict Mode
This definition provides a way to change the way we execute some instructions.
This definition is defined at the top of our code.

```js
// normal way
pi = 3.1416
console.log(pi)     // OUT -> 3.1416

// With strict mode
'use strict'
pi = 3.1416
console.log(pi)     // OUT -> Declaration error
```

More info, check this [Video](https://www.youtube.com/watch?v=7e6ssF78Af4)

# Closures
Un closure permite acceder al scope de una función exterior desde una función interior. En JavaScript, los closures se crean cada vez que una función se genera. A diferencia de otros conceptos como funciones, variables u otros, los closures no se utilizan todas las veces.
El entorno de ejecución de la función es clave.
> Check closures folder to code examples

# Hoisting
This is the variables and functions elevation when we run our code.

- Las Variables y las funciones se procesan antes de ejecutar el código.
- Las funciones antes que las Variables.
