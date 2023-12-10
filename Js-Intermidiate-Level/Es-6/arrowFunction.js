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

  const personalInfo = (name, age = 20) =>
    `your name is ${name} .Your age is ${age}`;
  console.log("ME : ", personalInfo("Golam Hakkani Mim"));
}

{
// Rest Paramerter 

/*
Write an arrow function that will take your unlimited friend name and if their length is even then show he is your best friend and if length is odd then store this friend and show two friend result.
*/

const myFriends =(...allFriends)=>{
    let remainingFriends=[];
    for(friend of allFriends){
       
        if(friend.length%2==0){
            console.log(`${friend} is my best friend.`);
        }
        else{
            remainingFriends.push(friend)
        }    

    }

    return remainingFriends;
}

const friendList = myFriends('usaid','sakil','bayzed','ismail','shadot','jakir')

console.log("result::",friendList);


}


{

/*

Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements

 */


const SummationOfSqureElements = (numbers) => {
  const length = numbers.length;
  let sum = 0;
  let avg ;

  let square=[]

  for(number of numbers){

    // get squre number 
     const squre = number * number ;

     // store squre number 
     square =[...square,squre];

     // calculate summation 
     sum+=squre;
  }



  avg = sum/length;


  


  return {
    summation : sum,
    average : avg ,
    length,
    square
  } ; 

}


const numbers = [1,2,3,4,5];
const results = SummationOfSqureElements(numbers);


console.log("Summation of Average : ", results.average);
console.log("Summation of Summation : ", results.summation);
console.log("Summation of length : ", results.length);
console.log("Summation of squre : ", results.square);
}