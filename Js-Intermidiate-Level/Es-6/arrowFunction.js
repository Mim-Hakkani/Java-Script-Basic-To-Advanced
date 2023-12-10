

{

/*  problem 1 : Write an arrow function that will take 3 parameters, will multiply
 the parameters and will return the result. */

  const multiplyParameter = (a, b, c) => a * b * c;
  const result = multiplyParameter(4, 2, 3);
  console.log("Result : ", result);
}

{
  /*
Template Leteral : 

Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
*/

  const Designation = "web developer";
  const pasion = "code";
  const likes = "biryani";
  const ConcatString = `
  I am a web ${Designation}.
  I love to ${pasion}. 
  I love to eat ${likes}`;

  console.log("Concat Result :: ", ConcatString);
}


{
    /*
    Default Parameter : 
    
    Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
    */

const personalInfo =(name,age=20)=>`your name is ${name} .Your age is ${age}`;
console.log("ME : ",personalInfo("Golam Hakkani Mim"));
}