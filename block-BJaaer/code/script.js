let form=document.querySelector("form");

let userInfo={};
function function1(event)
{
    event.preventDefault();
    userInfo.email=form.elements.email.value;
    userInfo.name=form.elements.text.value;
    userInfo.gender=form.elements.gender.value;
    userInfo.color=form.elements.color.value;
    userInfo.range=form.elements.range.value;
    userInfo.drone=form.elements.drone.value;
    userInfo.terms=form.elements.terms.checked;
}

form.addEventListener("submit",function1);


