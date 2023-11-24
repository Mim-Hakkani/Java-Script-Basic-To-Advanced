//JavaScript syntax is the set of rules, how JavaScript programs are constructed:

const a = 5 

// this synatax refers how to create variables 


/*
The JavaScript syntax defines two types of values:

Fixed values  // const a = 5  notchanges 

Variable values
Fixed values are called Literals.

JavaScript Literals:
The two most important syntax rules for fixed values are:

1. Numbers are written with or without decimals: 10 10.25

2. Strings are text, written within double or single quotes:

"mim"

Variable values are called Variables.

variables are used to store data values

JavaScript uses the keywords var, let and const to declare variables.

An equal sign is used to assign values to variables

JavaScript Operators
JavaScript uses arithmetic operators ( + - * / ) to compute values:
JavaScript uses an assignment operator ( = ) to assign values to variables:

let x, y;
x = 5;
y = 6;

JavaScript Expressions :
An expression is a combination of values, variables, and operators, which computes to a value.

5*10
or 
let a = 10

a*10


JavaScript Keywords : 
JavaScript keywords are used to identify actions to be performed.


JavaScript Comments : 

Not all JavaScript statements are "executed".

Code after double slashes // or between /* and 
Not all JavaScript statements are "executed".

Code after double slashes // or between /* and is treated as a comment.

Comments are ignored, and will not be executed:


JavaScript Identifiers / Names :
Identifiers are used to name variables and keywords, and functions.

The rules for legal names are the same in most programming languages.

A JavaScript name must begin with:

A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.


JavaScript is Case Sensitive

JavaScript and Camel Case
Lower Camel Case

JavaScript uses the Unicode character set.

*/

/******************* Learn Topic  *********************** */

Syntax 
Keyword
Identifiers
Comments 
Variables 
Expressions
Operator


/* Difference Betrween Expression and Statement */

/*

Main :
Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments

Details : 

The primary difference between expressions and statements lies in their fundamental purpose and how they are used within programming:

Purpose:

Expression: Expressions are typically meant to compute a value. They can be simple, like 2 + 3, or more complex involving variables, function calls, and operators, ultimately reducing to a single value.

Statement: Statements, on the other hand, are instructions that perform actions or tasks. They don’t necessarily produce a value but direct the flow of the program, like assignments (x = 5), loops (for i in range(5):), conditional execution (if x > 10:), etc.

*********************************************************** ****************************** 
Evaluation:

Expression: Expressions are often evaluated to produce a single value. For example, 2 + 3 evaluates to 5.
Statement: Statements do not necessarily result in a single value but rather cause actions to be taken within the program.


*********************************************************** ****************************** 

Usage:

Expression: Expressions can be embedded within statements. For instance, an expression like x + 3 can be part of an assignment statement like y = x + 3.

Statement: Statements usually consist of expressions but also contain control structures and keywords to direct program execution.

In essence, expressions produce values whereas statements perform actions or control the flow of the program. Often, statements include expressions within them to define the actions they need to execute.
*/