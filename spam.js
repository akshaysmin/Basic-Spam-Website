//alert('javascript started');
var time= new Date();
a1=time.getSeconds();
//alert(a1);
var aq=document.getElementById('aq');
function myalert()
{
a=confirm("Your pc is virus infected \n click to install antivirus");
if (a==true)
{
clearInterval(timer);
document.write("<a href=https://www.avira.com/en/free-antivirus-windows><b>Free download<b></a>");
}
}

/*
function Redflash(){aq.style.background='#990000';}
function Greenflash(){aq.style.background='#009900';}
function Blueflash(){aq.style.background='#000099';}
function bodyflash()
{
a1=time.getSeconds();
while (time.getSeconds()-a1<1){Redflash();}
a1=time.getSeconds();
while (time.getSeconds()-a1<1){Greenflash();}
a1=time.getSeconds();
while (time.getSeconds()-a1<1){Blueflash();}
}
q=setInterval(bodyflash,6000)
*/

timer=setInterval(myalert,1000)

//a=confirm("Bye")