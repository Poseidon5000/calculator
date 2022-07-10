// const figure = document.querySelectorAll(['data-number'])
// const actions = document.querySelectorAll(['data-operation'])
// const clearAll = document.querySelector(['data-clear'])
// const equal = document.querySelector(['data-equals'])
// const deletes = document.querySelector(['data-delete'])
// const firstDisplay = document.querySelector(['data-div1'])
// const secondDisplay = document.querySelector(['data-div2']


//call out parameters from HTML

const firstDisplay = document.querySelector(".div1");
const secondDisplay = document.querySelector(".div2")
const results = document.querySelectorAll("button")

//add event listeners

results.forEach(key=>{
    key.addEventListener("click",calculate)
});

function calculate(){
   let buttonDisplay = this.innerText;
   console.log("working");

   if(buttonDisplay==="AC"){
    firstDisplay.innerText = "";
    secondDisplay.innerText= "0";
    return
   }


   if(buttonDisplay==="DEL"){
     firstDisplay.textContent=firstDisplay.textContent.slice(0,-1)
    // firstDisplay.textContent= firstDisplay.textContent.substr(0, firstDisplay.textContent.length-1)
   }

   if(buttonDisplay==="="){
    secondDisplay.innerText=eval(firstDisplay.innerText)
   }
}




