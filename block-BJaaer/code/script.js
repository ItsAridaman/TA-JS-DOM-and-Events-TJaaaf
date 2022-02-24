let form=document.querySelector("form");
let model=document.querySelector(".model_overlay");
let model_info=document.querySelector(".model_info");

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

      model.classList.remove("display");

      model.classList.add("open");
      let close=document.querySelector(".model_close");
      close.addEventListener("click",()=>
      {
         model.classList.remove("open");
         model.classList.add("display");

      });
          data(userInfo);
}

form.addEventListener("submit",function1);

function data(data)
{
    model_info.innerHTML="";
    let h1=document.createElement("h");
    h1.innerText=`Hello: ${data.name}`;
    h1.style.fontSize="30px";
    model_info.append(h1);
    let email=document.createElement("p");
    email.innerText=`Your email is: ${data.email}`;
    model_info.append(email);
    let movies=document.createElement("p");
    movies.innerText=`The kind of movies you love: ${data.gender}`;
    model_info.append(movies);
    let color=document.createElement("p");
    color.innerText=`Your favourite color is: ${data.color}`;
    model_info.append(color);
    let rating=document.createElement("p");
    rating.innerText=`rating: ${data.range}`;
    model_info.append(rating);
    let book=document.createElement("p");
    book.innerText=`Your interest for movies: ${data.drone}`;
    model_info.append(book);
    let terms=document.createElement("p");

    if(data.terms==1)
    {
        terms.innerText=`👉:You accepted the terms & conditions`;
    }
    else
    {
        terms.innerText=`👉:Terms & conditions not accepted`;
    }
    model_info.append(terms);
}
