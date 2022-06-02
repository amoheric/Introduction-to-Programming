/*
ERIC AMOH ADJEI
5/18/2022
Funtions Assigment
*/

//creating and environment where function return CRAPS - you lose or DOUBLES - you win
//Declaring function
function play(die1, die2) {
    //this section am declaring some variables for the die1 and die2
     var die1 = 5 // Assign the value 5 to die1
     var die2 = 2 // Assign the value 2 to die2
     
     //whit spaces for easier readability.
 
     var sum = die1+die2; // here the assign variable is sum  with operator expressing die1 + die2 
     document.write("Die 1 = " + die1);//"Die1" in quotes will produce a String Die1= adding the value of die1
     document.write("<br/>");// breaking line to make the web page clean to read
 
     document.write("Die 2 = " + die2)// here, while "Die2" in quote produces the string Die2=, the die2 will produce the value 2 here
     document.write("<br/>");// breaking line to make the web page clean to read
 
     document.write("Sum = " + sum)//this function expression is to provide a return for the variable sum, if sum is the addition of die1 and die2   
     document.write("<br/>");//breaking line to make the web page clean to read
 
 //whit spaces for easier readability.
 
     if (sum == 7 || sum == 11)/*Here the program is left to logically think in favour of the true answer. thus,if the value of sum is equal to 7, 
     let the player win. vice-versa the player will lose if the value of sum end up to be 11 logically*/ 
 
     { document.write("CRAPS - you lose");//a funtion is evoke here, which the return will be seen on the webpage only if logically the value of sum returns 11 
     document.write("<br/>");//breaking line to make the web page clean to read
     }
     else if (die1== die2 && die1%2 == 0);// this will produce false since the value of die1 die2 are not equal. and logically remainder of die1 is not 0 either 
     {
     document.write("DOUBLES - you win");//the evoke funtion here, which the return will be seen on the webpage only if logically the value of sum returns 7 
     document.write("<br/>");//breaking line to make the web page clean to read
     }
     //whit spaces for easier readability.
     }
     document.write("Simple Craps");
     document.write("<br/>");//breaking line to make the web page clean to read
 
     function play(die1, die2);
 
     //whit spaces for easier readability.
 
     alert("Welcome To Quarks Casino")