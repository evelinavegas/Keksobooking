const imgForm = document.querySelector('#images').accept="image/*"
const priceForm = document.querySelector('#price') 
const descriptionForm = document.querySelector('#description')
descriptionForm.maxLength = '100'

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
function descriptionValidation (){
    if(descriptionForm.value.length <30){
        descriptionForm.setCustomValidity(`min 30 symbols`)
    } else {
        descriptionForm.setCustomValidity('')
    }
    return error
}

function roomsAndGuestvalidation (guests, rooms, inputValidation) {
    let roomsNumb = + rooms.value
    let guestsNumb =  +guests.value

    if(guestsNumb > roomsNumb){
        inputValidation.setCustomValidity(`Not more ${roomsNumb} guests`)
    } else if(roomsNumb === 100 && guestsNumb != 0){
        inputValidation.setCustomValidity('Not for guests')
    } else if(roomsNumb !== 100 && guestsNumb === 0){
        inputValidation.setCustomValidity('At least 1 guest')
    } else {
        inputValidation.setCustomValidity('')
    }
}



export{roomsAndGuestvalidation, descriptionValidation, priceValidation}