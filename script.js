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
    divs.forEach((div)=>{
    div.addEventListener("mouseover",()=>
        {div.style.backgroundColor="darkgray"});
});
}
createBox(16);
const reset=document.querySelector(".reset-button");
reset.addEventListener("click",()=>{
    container.innerHTML="";
    createBox(16);
})
