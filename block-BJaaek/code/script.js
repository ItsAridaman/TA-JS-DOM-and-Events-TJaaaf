let first=document.querySelector(".first");
let second=document.querySelector(".second");

setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    first.style.backgroundColor = "#" + randomColor;

  }
  setBg1 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    second.style.backgroundColor = "#" + randomColor;

  }

first.addEventListener('click',setBg);
  
function flashMsg()
{
  console.log("hello there");
}

second.addEventListener('mousemove',setBg1);