const buttons=document.querySelectorAll('.button');
// console.log(buttons);
const body=document.querySelector("body");
const h1 = document.querySelector("h1"); 
const h2 = document.querySelector("h2");

buttons.forEach( function(button){
    console.log(buttons);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="grey")
        {
            body.style.backgroundColor=e.target.id
            h1.style.color="white";
            h2.style.color="white";
            
        }
        if(e.target.id==="white")
        {
            body.style.backgroundColor=e.target.id
            h1.style.color="black";
            h2.style.color="black";
        }
        if(e.target.id==="blue")
        {
            body.style.backgroundColor=e.target.id
            h1.style.color="white";
            h2.style.color="white";
        }
        if(e.target.id==="yellow")
        {
            body.style.backgroundColor=e.target.id
            h1.style.color="grey";
            h2.style.color="grey";
        }
    })

})