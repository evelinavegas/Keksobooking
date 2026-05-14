import { cardsArr } from "./cards-create.js";
import { displayCards } from "./cards-display.js";
import { priseCorecting, selectedTime} from "./cards-filtering.js";
import {  form,  mapFilters,  disabledForm, map } from "./create-map.js";
import { roomsAndGuestvalidation, descriptionValidation, priceValidation } from "./form-validation.js";

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

// Leaflet map create

const formAtributs = document.querySelectorAll('.ad-form fieldset')
const filterAtributs = document.querySelectorAll('.map__filters select, fieldset')

disabledForm(filterAtributs, true)
disabledForm(formAtributs, true)

map.whenReady(() => {
    form.classList.remove('ad-form-disabled')
    mapFilters.classList.remove('ad-form-disabled')
    setTimeout(() => {
        disabledForm(filterAtributs, false)
        disabledForm(formAtributs, false)
    }, 1000);
    
})

// validation 
const roomCount = document.querySelector('#room_number')
const capacity = document.querySelector('#capacity')
const submitBtn = document.querySelector('.ad-form__submit')

submitBtn.addEventListener('click', e=>{
    e.preventDefault()
    roomsAndGuestvalidation(capacity, roomCount, roomCount)
    roomsAndGuestvalidation(capacity, roomCount, capacity)
    descriptionValidation()
    priceValidation()
    form.reportValidity()
    form.checkValidity() === true ? alert('Form submitted'): console.log('error')
    console.log('form')
})