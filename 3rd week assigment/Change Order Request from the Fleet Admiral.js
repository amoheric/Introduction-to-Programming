/*
    ERIC AMOH ADJEI
    Loop Assigment.JS
    5/29/22
*/

var countdown = 0; // set a variable for countdown

while(countdown < 10)// while function creates loops
{
    document.write(countdown);//this is the calling of our return
    document.write("<br><br/>");// line break
    countdown++;
    
    if (countdown < 5) //if statements to set conditions
    {
          document.write("Warning Less than ½ way to launch, time left = less than 5 seconds to go...");// expecting a return 
    }

   else if (countdown > 5)// else if my conditions change
   {
    document.write("Warning more than ½ way to launch, time left = 5 more seconds left...");//implement this return 
   }
}

document.write("<br><br/>")

document.write("Mission Control, We Have Blastoff!!!");// adding my last staement

document.write("<br><br/>")

alert("We Here To Blastoff Again")
  
 

  