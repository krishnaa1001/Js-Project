const clock=document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function(){
let date=new Date(); //object
// console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString();
},1000)
