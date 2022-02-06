// without event deligation

let hello=document.querySelectorAll(".first li");

hello.forEach((box,index)=>
{
    box.addEventListener("click",(Event)=>
    {
        Event.target.innerText=index+1;
        setTimeout(()=>
        {
            Event.target.innerText="";

        },5000);
    })
})

// with event deligation

let hello2=document.querySelector(".second");

hello2.addEventListener("click",(Event)=>
{
let text=Event.target.dataset.text;
Event.target.innerText=text;
setTimeout(()=>
        {
            Event.target.innerText="";

        },5000);

        
})
