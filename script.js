const rdmNr = require("school-proj-npm-rdm-no");
const fieldDiv = document.getElementById("rdm-no-field");

const lowestInput = document.createElement("input");
lowestInput.setAttribute("type", "number");

const highestInput = document.createElement("input");
highestInput.setAttribute("type", "number");

const noPara = document.createElement("div")

const rdmBtn = document.createElement("button");
rdmBtn.textContent = "Random no"
rdmBtn.addEventListener("click", ()=>{
    const lowest = parseInt(lowestInput.value);
    const highest = parseInt(highestInput.value);
    const randomNum = rdmNr(lowest, highest);
    console.log(randomNum);
    noPara.innerHTML = randomNum
})

fieldDiv.appendChild(lowestInput)
fieldDiv.appendChild(highestInput)
fieldDiv.appendChild(rdmBtn)
fieldDiv.appendChild(noPara)

