"use strict";
const addCoin = (event) => {
  event.preventDefault();
  const data = new FormData(document.querySelector("form"));
  
  const inputHowMany = Number(data.get("howMany"));
  console.log(inputHowMany);
  console.log(typeof inputHowMany);
  const dropMenu=data.get("coins");
  console.log(dropMenu);
  
  for (let i=0; i<inputHowMany; i++) {
      document.querySelector(".coins").innerHTML += `<div class="coinSelection"><p>${dropMenu}</p></div>`;
  };
  
};

document.querySelector("form").addEventListener("submit", addCoin);


document.querySelector(".coins").addEventListener("click", (event)=> {
    if(event.target.localName === "p"){
        event.target.parentElement.remove();
    } else if (event.target.localName === "div" && event.target.classList.contains("coinSelection")) {
        event.target.remove();
    }
});