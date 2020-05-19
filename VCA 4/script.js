
              // FIRST QUESTION  //
         
        function checkPrime() { 
        var n, i, flag = true; 
             n = document.myform.n.value; 
            n = parseInt(n) 
            for (i = 2; i <= n - 1; i++) 
                if (n % i == 0) { 
                    flag = false; 
                    break; 
} 
                  
          
            if (flag == true) {
                console.log(n + " is prime");
            }
            else{
                console.log(n + " is not prime"); 
        } 
    
    }

 //     SECOND QUESTION    // 
function item(){                                                      
     let array= [ 2 , 3 , 4 , 5 , 3 , 5 , 2 , 5 , 5 ];
    let a = 1 , c = 0 , item = array[0] ,i,j;
     for(i = 0 ; i < array.length ; i++){
     for(j = i; j < array.length ; j++)
     if(array[i] == array[j])c++;
     if(c>a){
        item = array[i];
           a = c;
    }
           c = 0;
}
 console.log("Most frequent item of array is " + item);
                                                          
}

 //      THIRD QUESTION      //
function string(){
var string = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
 for(var x = 0; x < string.length; x++){
    if(LOWER.indexOf(string[x]) !== -1){
       result.push(string[x].toUpperCase());
}
    else if(UPPER.indexOf(string[x]) !== -1){
            result.push(string[x].toLowerCase());
}
    else {
            result.push(string[x]);
}
}
console.log(result.join(''));
}

//    FOURTH QUESTION   //

function sum_sq() {
  var sum = 0,array=[1,5,6,3,4],
      i = array.length;
  while (i--)
   sum += Math.pow(array[i], 2); 
console.log( "Sum of squares of an array is " + sum); 
} 
onclick="sum_sq()";

//    FIFTH QUESTION      //
 function iterate(){  
for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
} 

//  SIXTH QUESTION  //

document.getElementById("btn").addEventListener("click", truncate);
let myString ="Javascript function truncate a string if it is longer than the specified number of characters"; 
function truncate(){
const maxValue = 50;
const TrimMyString = (string, maxLength, start = 0) => {
  if (string.length > maxLength) {
     let trimmedString = string.substr(start, maxLength);
      return (
        trimmedString.substr(
        start,
        Math.min(trimmedString.length,   trimmedString.lastIndexOf(' '))
                            ) + ' ...'
             )
      }
   return string;
}
console.log(TrimMyString(myString, maxValue));
}

//  SEVENTH QUESTION  //

function findLarge(){
  let a=parseInt(document.getElementById("num1").value);
  let b=parseInt(document.getElementById("num2").value) ;
if(a>b){
  console.log("The largest number is "+ a);
}
else if(a<b){
  console.log("The largest number is "+ b);
}
else{
  console.log("Please add an integer");
}
 }


//  EIGHTH QUESTION   //

var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(months);
function sort(){
    months.sort();
    console.log(months);
}



//  NINTH QUESTION  //

document.getElementById("myBtn").addEventListener("click" , string2);
var word = "Javascript";
function string2(){
for (var i = 0; i < word.length; i++) {
  var str = "";
  for (var j = 0; j <= i; j++) {
    str += word[j];
  }
  console.log(str);
}
}

//  TENTH QUESTION   //

document.getElementById("myBtn2").addEventListener("click",string3);
var i,j;
function string3(){
 for(i=1; i <= 5; i++)
 {
  for(j=1; j<=i; j++)
 {
   
   document.write("*");
  }
   document.write("<br />");
  }
}  
