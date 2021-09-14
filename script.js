function compute()
{
		// variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // compute
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var returns = interest;
    
    // if validation of principal = true
    if (validate()){
       showResult(principal, rate, year, returns);
      }
    }

// Updates the rate value when slider position changes
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=`${rateval}%`;
}

//Show the results
function showResult(principal, rate, year, returns) 
{
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%. </mark>\<br\>You will receive an amount of <mark>"+returns+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}

//Validates principal value
function validate(){
var amount = document.getElementById("principal").value;  

// if amount is , null, 0 or negative, alert user
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
