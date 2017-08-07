console.log('Loaded!');


//change value
var element=document.getElementById('main-text');
element.innerHTML='new value';

//move image
var marginLeft=0;
var img=document.getElementById('madi');
function moveRight()
{
    marginLeft=marginLeft+10;
    img.stly.marginLeft=marginLeft + 'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,50);
};
