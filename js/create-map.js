import makerPng from '../img/main-pin.svg'

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

const map = L.map('map').setView([35.6762, 139.6503], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const myIcom = L.icon({
    iconUrl : makerPng,
    iconSize: [40,40],
})
let marker = L.marker([35.6762, 139.6503], {icon: myIcom}).addTo(map);

export {form}