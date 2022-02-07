let display=document.querySelector(".display")

let buttons=document.querySelectorAll(".buttons button")

let initialValue=0;
display.innerText=initialValue;



buttons.forEach((button)=>
{
    button.addEventListener("click", (Event)=>
    {
        if(Event.target.classList.contains("equalsto"))
        {
            display.innerText=eval(display.innerText);
            return;
        }
        if(Event.target.classList.contains("clear"))
        {
            display.innerText=initialValue;
            return;
        }

        if(display.innerText==initialValue)
        {
            display.innerText=Event.target.innerText;
            return;
        }
        else
        {
            display.innerText+=Event.target.innerText;
            return;
        }


    })
}

)