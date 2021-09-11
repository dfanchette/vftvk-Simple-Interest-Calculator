function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
     var interest = principal * years * rate /100;
     var year = new Date().getFullYear()+parseInt(years);
      var amount = interest;
    if (validate()){
       showResult(principal, rate, year, amount);
      }
    }

// Updates the rate value when user change the range
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Show the results
function showResult(principal, rate, year, amount) 
{
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%. </mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}

//Validates principal input box
function validate(){
var amount = document.getElementById("principal").value;   
if (amount<=0){
alert("Enter a positive number");
document.getElementById("principal").focus();
document.getElementById("result").innerHTML="";
return false;
}
else{
return true;
}
}