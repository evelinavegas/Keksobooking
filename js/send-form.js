// avatar: "img/avatars/user04.png"
// offer: 
//     address: "X: 35.67136 Y: 139.74631"
//     checkin: "14:00"
//     checkout: "12:00"
//     description: "Підлога в хорошому стані, приємна на дотик"
//     features: ['parking']
//     guests: "8 guests"
//     photos: (2) ['http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel1.jpg']
//     price: "9768 $"
//     rooms: "4 rooms"
//     title: "Затишна квартира в самому серці міста"
//     type: "palace"

function sendForm (target) {
    const formData = new FormData(target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)

}

export {sendForm}