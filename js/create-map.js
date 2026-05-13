const form = document.querySelector('.ad-form')
const mapFilters = document.querySelector('.map__filters')
const addressForm = document.querySelector('#address') 
addressForm.readOnly = true
addressForm.value = '35.6762, 139.6503'

form.classList.add('ad-form-disabled')
mapFilters.classList.add('ad-form-disabled')

function disabledForm(arr1,  boolean) {
    arr1.forEach(e => {
        e.disabled = boolean
    })
}

// map

const map = L.map('map').setView([35.6762, 139.6503], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([35.6762, 139.6503], { draggable: true }).addTo(map);
let markerIcon = document.querySelector('.leaflet-marker-icon').style.width = '41px'

marker.on('dragend', (e) =>{
    const coords = e.target.getLatLng()
    addressForm.value = ''
    const lat = coords.lat.toFixed(4)
    const lng = coords.lng.toFixed(4)

    addressForm.value = `${lat} ${lng}`
})

export { form,  mapFilters,  disabledForm, map }