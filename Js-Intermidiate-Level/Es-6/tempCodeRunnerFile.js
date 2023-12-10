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