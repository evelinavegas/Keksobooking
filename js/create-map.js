const form = document.querySelector('.ad-form').classList.add('ad-form-disabled')
const formAtributs=document.querySelectorAll('.ad-form fieldset')
const mapFilters = document.querySelector('.map__filters').classList.add('ad-form-disabled')
const filterAtributs = document.querySelectorAll('.map__filters select, fieldset')


disabledAdd(filterAtributs)
disabledAdd(formAtributs)
function disabledAdd(arr){
    arr.forEach(e=>{
        e.disabled = true
    })
}

export {form}