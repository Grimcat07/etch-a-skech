let box=16;
let divs=[];
const container=document.querySelector(".container");
function createBox(box){
    boxsquare=box*box;
    squarebox=600/box;
    while(boxsquare>0)
    {
        let div=document.createElement("div");
        div.classList.add('grid-box');
        div.style.width=`${squarebox}px`;
        div.style.height=`${squarebox}px`;
        divs.push(div);
        container.appendChild(div);
        boxsquare--;
    }    
}
const boxes=document.querySelector(".boxes");
boxes.addEventListener("click",()=>{prompt('Enter the number of grids')});
createBox(box);