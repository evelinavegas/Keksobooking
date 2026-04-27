import { cardsArr } from "./cards-create.js";
import { displayCards } from "./cards-display.js";
import { priseCorecting, selectedTime} from "./cards-filtering.js";

displayCards(cardsArr)

const housingType = document.querySelector('#type') 

housingType.addEventListener('change', (e)=> {
    let target = e.target.value 
    priseCorecting(target)
})

const timeIn= document.querySelector('#timein')
const timeOut= document.querySelector('#timeout')

timeIn.addEventListener('change', (e)=>{
    let target = e.target.value
    selectedTime(target, timeOut)
})
timeOut.addEventListener('change', (e)=>{
    let target = e.target.value
    selectedTime(target, timeIn)
})