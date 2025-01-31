let divs=[];
let num=0;
const container=document.querySelector(".container");
const boxes=document.querySelector(".boxes");
boxes.addEventListener("click",()=>{num=Number(prompt('Enter the number of grids less than 100'));
    if(num<100)
    {
        container.innerHTML="";
        divs=[];
        createBox(num);
    }
    else
    {
        container.innerHTML="";
        divs=[];
        createBox(16);
        alert('enter the correct number');
    }
});

function createBox(num){
    boxsquare=num*num;
    let div;
    squarebox=600/num;
    while(boxsquare>0)
    {
        div=document.createElement("div");
        div.classList.add('grid-box');
        div.style.width=`${squarebox}px`;
        div.style.height=`${squarebox}px`;
        divs.push(div);
        container.appendChild(div);
        boxsquare--;
    }
}
createBox(16);
console.log(divs);
divs.forEach((div)=>{
    div.addEventListener("mouseover",()=>
        {div.style.backgroundColor="white"});
    div.addEventListener("mouseout",()=>
    {
        div.style.backgroundColor="black";
    });
    
});
