const rdmNr = require("school-proj-npm-rdm-no");
const fieldDiv = document.getElementById("rdm-no-field");

const lowestInput = document.createElement("input");
lowestInput.setAttribute("type", "number");

const highestInput = document.createElement("input");
highestInput.setAttribute("type", "number");

const noPara = document.createElement("div")

const rdmBtn = document.createElement("button");
rdmBtn.textContent = "Random NO"
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

const { getRandomDogImage } = require('my-npm-axios-dog');
const outDogImg = document.createElement('div')

async function dogFun() {
    try {
      const dogImgUrl = await getRandomDogImage();
      const dogImg = document.createElement("img");
      outDogImg.innerHTML = '';
      dogImg.src = dogImgUrl;      
      dogImg.style.maxWidth = "300px"; // Set the maximum width
      dogImg.style.maxHeight = "300px"; // Set the maximum height
      outDogImg.appendChild(dogImg); // Append the image to the dogDiv element
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  const dogDiv = document.getElementById("rdm-dog-field");
  const rdmDogBtn = document.createElement("button");
  rdmDogBtn.textContent = "Random dog";
  rdmDogBtn.addEventListener("click", dogFun); // Use dogFun as the event listener
  
  dogDiv.appendChild(outDogImg)
  dogDiv.appendChild(rdmDogBtn);
  