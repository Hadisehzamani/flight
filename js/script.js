let dataCities = {
    Iran: ['tehran','ardebil','tabriz','kermanshah'],
    Canada: ['vancover','torento'],
    Turkey: ['adana','ghazi antep','estanbol','antalia']
}

let citySelect = document.querySelector('.citySelect')

let selectBox = document.querySelector('.countrySelect')

selectBox.addEventListener('change', function(){
   let selectValue = selectBox.value
   
   citySelect.innerHTML = "";
   dataCities[selectValue].forEach(element => {
    citySelect.innerHTML += `<option>${element}</option>`
   })
})