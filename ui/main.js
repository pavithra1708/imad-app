console.log('Loaded!');


//change value
var element=document.getElementById('main-text');
element.innerHTML='new value';

//move image
var img=document.getElementById('img');
img.onclick=function()
{
  img.style.marginleft='100px';  
};
