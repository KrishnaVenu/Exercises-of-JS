
              // FIRST QUESTION  //
        // Function to check for prime number 
        function checkPrime() { 
        var n, i, flag = true; 
             n = document.myform.n.value; 
            n = parseInt(n) 
            for (i = 2; i <= n - 1; i++) 
                if (n % i == 0) { 
                    flag = false; 
                    break; 
} 
                  
            // Check and display output 
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

function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log( "Sum of squares of an array is " + sum_sq([1,5,6,3,4])); 
                                                
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
