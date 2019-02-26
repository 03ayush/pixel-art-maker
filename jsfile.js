let rootElem = document.getElementById("root");

let colLength=30, rowLength=30;
let mouseClicked = false;
rootElem.style.width = 17*colLength+"px";
let selectedColor="red"

for(let i=0; i<colLength*rowLength; i++){
      let divElem = document.createElement('div');
      divElem.style="width:15px; height:15px; border:1px; border-style:solid;";
      //divElem.onclick=()=>{divElem.style.backgroundColor=selectedColor};
      divElem.onmousedown =()=>{divElem.style.backgroundColor=selectedColor; mouseClicked=true};
      divElem.onmouseenter =()=>{if(mouseClicked)divElem.style.backgroundColor=selectedColor};
      divElem.onmouseup =()=>{mouseClicked=false};

      //divElem.onmouseleave =()=>{divElem.style.backgroundColor=selectedColor};
      rootElem.appendChild(divElem);
}


let colorPalet = document.createElement('div');
colorPalet.style="display:flex; flex-direction:row; margin: 20px";
["red", "brown","green", "blue", "white", "black"].forEach((item)=>{
  let divElem = document.createElement('div');
  divElem.style="width:15px; height:15px; border:1px; border-style:solid;";
  divElem.style.backgroundColor = item;
  divElem.onclick=()=>{selectedColor = item};
  colorPalet.appendChild(divElem)
});


rootElem.appendChild(colorPalet);
