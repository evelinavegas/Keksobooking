// import { sendForm } from "./server/send-form.js"
let objData =  {}

function addFormData (target, featuresArr,avatar, images) {
    const formData = new FormData(target)
 
    const data = Object.fromEntries(formData.entries())
    
    let objForm = createObjForm(data, avatar, featuresArr, images)
    return objForm
}

function createObjForm(data, avatar, featuresArr, images){
    let offer = {}
    let address = data.address.split(', ')

    objData.avatar = avatar
    
    offer.address = `X: ${address[0]} Y: ${address[1]}}`
    offer.checkin = data.timein
    offer.checkout = data.timeout
    offer.description = data.description
    offer.features = featuresArr
    offer.capacity = `${data.capacity} guests`
    offer.images = images
    offer.price = `${data.price} $`
    offer.rooms = `${data.rooms} rooms`
    offer.title = data.title
    offer.type = data.type

    objData.offer = offer    
    return objData
}

export {addFormData}