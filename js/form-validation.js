const form = document.querySelector('.ad-form')
const roomCount = document.querySelector('#room_number')
const capacity = document.querySelector('#capacity')
const imgForm = document.querySelector('#images').accept="image/*"
const priceForm = document.querySelector('#price') 
const titleForm = document.querySelector('#title')
titleForm.maxLength = '100'

const PRICE_RANGE = {
    min: 1, max: 100000,
}

function priceValidation (){
    if(priceForm.value < PRICE_RANGE.min ){
        priceForm.setCustomValidity(`minimum price ${PRICE_RANGE.min}`)
    } else if (priceForm.value > PRICE_RANGE.max){
        priceForm.setCustomValidity(`maximum price ${PRICE_RANGE.max}`)
    } else{
        priceForm.setCustomValidity('')
    }
}
function titleValidation (){
    if(titleForm.value.length <30){
        titleForm.setCustomValidity(`min 30 symbols`)
    } else {
        titleForm.setCustomValidity('')
    }
    return error
}

function roomsAndGuestvalidation (guests, rooms, inputValidation) {
    let roomsValue= + rooms.value
    let guestsValue =  +guests.value

    if(guestsValue > roomsValue){
        inputValidation.setCustomValidity(`Not more ${roomsValue} guests`)
    } else if(roomsValue === 100 && guestsValue != 0){
        inputValidation.setCustomValidity('Not for guests')
    } else if(roomsValue !== 100 && guestsValue === 0){
        inputValidation.setCustomValidity('At least 1 guest')
    } else {
        inputValidation.setCustomValidity('')
    }
}
function validationForm(){
    roomsAndGuestvalidation(capacity, roomCount, roomCount)
    roomsAndGuestvalidation(capacity, roomCount, capacity)
    titleValidation()
    priceValidation()
    // form.reportValidity()
    // form.checkValidity() === true ? alert('Form submitted'): 0
}

form.addEventListener('click', (e)=>{
    roomCount.setCustomValidity('')
    capacity.setCustomValidity('')
    priceForm.setCustomValidity('')
    titleForm.setCustomValidity('')
})

export{validationForm}