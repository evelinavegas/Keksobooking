import { cardsArr } from "./cards-create.js";
import { displayCards } from "./cards-display.js";
import { priseCorecting } from "./cards-filtering.js";

displayCards(cardsArr)

const housingType = document.querySelector('#type') 

housingType.addEventListener('change', (e)=> {
    let target = e.target.value 
    priseCorecting(target)
})
