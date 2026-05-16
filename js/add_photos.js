const avatar = document.querySelector('#avatar')
const avatarPreview = document.querySelector('.ad-form-header__preview img')
const imagesContainer = document.querySelector('.ad-form__photo-container')
const imagesAddButton = document.querySelector('#images')
const formImgBlock = document.querySelector('.ad-form__photo')
const image = document.querySelector('#form_photo')

imagesAddButton.multiple = true

let img= ''
avatar.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    let url = addPrewue(file)
    avatarPreview.src = url
})
const fragment = new DocumentFragment()

imagesAddButton.addEventListener('change', e =>{
    formImgBlock.classList.add('hidden')
    for( let file of e.target.files){
        let url = addPrewue(file)
        displayUsersPhotos(url)
    }
    imagesContainer.appendChild(fragment)
})

function addPrewue (file) {
    if(!file) return
    const blob = new Blob([file], { type: file.type })
    const url = URL.createObjectURL(blob)
    return url  
}


function displayUsersPhotos(url) {
    const cloneElement = image.content.cloneNode(true);
    cloneElement.querySelector('.form__photo-img').src = url
    fragment.appendChild(cloneElement)
}

export {img}
