var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn)
{
  item.addEventListener('click',(e)=>
  {
    console.log("clicked");
      btntext=e.target.innerText;
      if(btntext=='×')
      {
        btntext='*';
      }
      if(btntext=='÷')
      {
        btntext='/';
      }
      screen.value+=btntext;
  });
}

function sin()
{
  screen.value=Math.sin(screen.value);
}
function cos()
{
  screen.value=Math.cos(screen.value);
}
function tan()
{
  screen.value=Math.tan(screen.value);
}
function log()
{
  screen.value=Math.log(screen.value);
}
function pow()
{
  screen.value=Math.pow(screen.value,2);
}
function sqrt()
{
  screen.value=Math.sqrt(screen.value,2);
}
function pi()
{
  screen.value=3.14159265359;
}
function e()
{
  screen.value=2.71828182846 ;
}
function fact()
{
  var num,i,f=1;
  num=screen.value;
  for(i=num;i>=1;i--)
  {
    f=f*i;
  }
  i=i-1;
  screen.value=f;
}
function backspc()
{
  screen.value=screen.value.substr(0,screen.value.length-1);
}
