import { displayCards } from "./cards-display.js";
import { priseCorecting, selectedTime} from "./cards-filtering.js";
import {  form,  mapFilters,  disabledForm, map } from "./create-map.js";
import {validationForm} from "./form-validation.js";
import { sendForm } from "./send-form.js";
import { img } from "./add_photos.js";

async function getCards(){
    try {
        const response = await fetch('http://localhost:8080/advertsData')
        if(!response.ok) {
            throw new Error('Error server', response.status)
        }
        const cardsArr = await response.json()

        return cardsArr
    } catch (error) {
        console.log('error !!!', error)
        return 
    }
}
const cardsArr = await getCards()
console.log(cardsArr[0])
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
// const submitBtn = document.querySelector('.ad-form__submit')

// submitBtn.addEventListener('click', e=>{
//     e.preventDefault()
//     validationForm()
// })
const formData = document.querySelector('.ad-form')

formData.addEventListener('submit', e => {
    e.preventDefault()
    validationForm()
    form.reportValidity()
    form.checkValidity() === true ? sendForm(e.target): 0
})