var a = 0;
var b = document.querySelectorAll('h1,button');
console.log(b);
function abc(){
    a++;
    console.log(a);
    b[0].innerHTML=a;
    
}
b[2].addEventListener('click',()=>{
    b=0;
})

setInterval('abc()',1000);
