const submitBtn = document.querySelector('.ad-form__submit')

submitBtn.disabled = true 
submitBtn.addEventListener('click', e=>{
    e.preventDefault()
    alert('Form submitted')
} )

function validation (guests, rooms, inputValidation) {
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
        submitBtn.disabled = false
    }
    inputValidation.reportValidity()
}

export{validation}