//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    //make a response to the endpoint
    
    
    
    //and capture the response
    
    
    //render the variable in correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString()
}
