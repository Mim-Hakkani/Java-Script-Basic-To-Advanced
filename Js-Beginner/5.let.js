/*
declate with let keyword 
used in block scope {} and function scope
cannot be redeclare in block scope 

hoisted but variable is not undefined in initial state  
*/

{
    let a = 5;
}
{
    let a = 10;
}

// differcnce between 

// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

// const 

    // Variables defined with const cannot be Redeclared
    // Variables defined with const cannot be Reassigned
    // Variables defined with const have Block Scope