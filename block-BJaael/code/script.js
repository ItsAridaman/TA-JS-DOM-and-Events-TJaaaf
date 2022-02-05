let boxes=document.querySelector('.boxes');

for(let i=1;i<=500;i++)
{
    let box=document.createElement('div');
    box.classList.add('box');
    let h2=document.createElement("h");
    h2.innerText=Math.floor(Math.random() * 11);
    box.append(h2);
    box.addEventListener('mouseover',setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        box.style.backgroundColor = "#" + randomColor;
       
      });
    box.addEventListener('mouseover',function randomNumbers()
    {
        h2.innerText=Math.floor(Math.random() * 34);

    });
    boxes.append(box);
};


