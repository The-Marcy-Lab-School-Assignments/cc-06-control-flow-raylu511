// 1
function sumOfThreeAndFive(){
  let sum = 0;
  for(let i=3; i<=1000; i++){
      if(i%3===0 || i%5===0){
          sum+=i;
      }
  }
  return sum;
}

// 2
function greaterNum(numOne,numTwo){
  if(typeof(numOne) != 'number' || typeof(numTwo) != 'number'){
      return null;
  }
  else if(numOne === numTwo){
      return 'Both numbers are equal';
  }
  return numOne>numTwo ? numOne : numTwo;
}

// 3 
function oddAndEvenInFifteen(){
  for(let i=0;i<=15;i++){
      if(i%2===0){
          console.log(`${i} is even`);
      }
      else{
          console.log(`${i} is odd`);
      }
  }
}



// Bonus
// Implemented bubble sort
function sortThreeNums(intOne, intTwo, intThree){
    let tempInt;
    const intArray = [intOne, intTwo, intThree];
    for(let i=0; i<intArray.length; i++){
        for(let a=0; a<intArray.length; a++){
            if(intArray[a]<intArray[a+1]){
                tempInt=intArray[a];
                intArray[a] = intArray[a+1];
                intArray[a+1]=tempInt;
            }
        }
    }
    return intArray;
}


// console.log(sumOfThreeAndFive());        //234168
// console.log(greaterNum(10, 7));          //returns 10
// console.log(greaterNum(1.14, 1.14));     //returns "both integers are equal"
// console.log(greaterNum("21", 21));       //returns null
// oddAndEvenInFifteen();                   // first five console.logs:
                                            // "0 is even"
                                            // "1 is odd"
                                            // "2 is even"
                                            // "3 is odd"
                                            // "4 is even"
                                            // "5 is odd"
// console.log(sortThreeNums(-14,14,-1));   //console.logs: 14, -1, -14 
// console.log(sortThreeNums(2,5,50));      //console.logs: 50, 5, 2


