// LOGICAL OPERATORS

let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2);
console.log(num1 > num2);

console.log(num1 <= num2);
console.log(num1 >= num2);

console.log(!true);
console.log(!false);

console.log(num1 == num3); 
console.log(num1 === num3); // equality check

console.log(word1 === word2);

console.log(word1 != word2);




// CONTROL FLOW

if ("U2" === "Annapuna"){
    console.log("Buy Annapuna");
} else if("U2" === "U2"){
    console.log("Buy U2");
}

let item = "Annapuna";
if (item === "Annapuna"){
    console.log("Buy Annapuna");
} else if(item === "U2"){
    console.log("Buy U2");
}else if(item === "A1"){
    console.log("Buy A1");
} else {
    console.log("Buy Rocky Salt");
}

//GRADING SYSTEM

let score = 90;
if (score >= 0 && score <= 100){

if(score >= 90 ){
    console.log("Excellent");
} else if (score >= 80){
    console.log("Very Good");
} else if (score >= 70){
    console.log("Good");
} else if (score >= 60){
    console.log("Average");
} else if (score >= 50){
    console.log("Credit");
} else if (score >= 40){
    console.log("Pass");
} else {
    console.log("Fail");
}

} else {
    console.log("please enter valid score");
}



// FUNCTION

function sum(a, b){
    let total = a + b;
    return total;
   }
   
   let eleven = sum(5, 6);
   let fifteen = sum(7, 8);
   let nineteen = sum(9, 10);


   Multipy Function

   function multiplication(a, b){
    let total = a * b;
    return total;
   }
   
   let ele = multiplication(5, 6); 




   // DEFAULT VALUE


   function multiplication(a, b = 5){
    let total = a * b;
    return total;
   }
   
   let elev = multiplication(5);

   console.log(elev);


   //LOOPS

   // FOR LOOP

   for (let i = 1; i <= 10; i++){
    console.log(i);
   }

   for (let i = 1; i <= 100; i++){
    console.log(i + " I will not talk in class again");
   }

// WHILE LOOP

  let num =1;
  while(num <= 10){
    console.log(num);

    num++;
  }

  // Do..... While Loop
  let age = 18;
  do {
    console.log(age + " You can't vote");
    age++;
  } while(age < 18);


  // ARRAY METHOD

  let ages = [19, 26, 24, 18, 22, 35, 30, 33, 31, 29];
  
  for(let age of ages){
    console.log(age);
    console.log(Math.pow(age, 2));
  }

  let marriage = ages.filter((mark) => num > 25);
  console.log(marriage);


  // ANOTHER WAY TO DECLARE AN ARRAY METHOD with for of
  for(let age in a[19, 26, 24, 18, 22, 35, 30, 33, 31, 29]){
    console.log(age * age);
  }


// Map 
let squares = ages.map((age) => age * age);
console.log(squares);

// find

let eighteen = ages.find((age) => age === 18);
console.log(eighteen);





   