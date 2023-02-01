// 1. Dichiarare i vari elementi del document
 let kmElement = document.querySelector('#train input[type="email"]')
 let chooseCity = document.querySelector('#train input[type="city"]')
 let scontoElement = document.querySelector('#train select[name="color"]')
 let btnElement = document.querySelector('#train input[type="button"]')
 let prezzoUser = document.querySelector('#prezzo-finale')
 let nameUser = document.querySelector('#train input[type="name"]')
 let surName = document.querySelector('#train input[type="surname"]')
 console.log(nameUser)
 
 console.log( kmElement, scontoElement, btnElement)

let name = document.querySelector('#name')
let townElement = document.querySelector('#town')
let carrozzaElement = document.querySelector('#number-carrozza')


// 3. Collegare i vari elementi al button

btnElement.addEventListener('click', function () {
    console.log('questa')
    
    let kmUser = kmElement.value
    
    let prezzo = kmUser * 0.21
        console.log(prezzo)

    let under18 = (prezzo * 20) / 100
        console.log(under18)

    let over65 = (prezzo * 40) / 100
        console.log(under18)

    
    let scontoUser = scontoElement.value
    console.log(kmUser, scontoUser)

    let nameElement = nameUser.value
    console.log(nameElement)
    
    let surNameElement = surName.value
    console.log(surNameElement)

    let cityElement = chooseCity.value
    console.log(cityElement) 

    name.innerHTML = nameElement + ' ' + surNameElement

    townElement.innerHTML = cityElement + ' ' + kmUser

    let numeroPc = Math.floor(Math.random() * (9 - 1 + 1) + 1)
    console.log(numeroPc)
    carrozzaElement.innerHTML = numeroPc

    switch (scontoUser) {
        case '1':
            prezzoUser.innerHTML = under18.toFixed(2) + '€'
            break
        case '2':
            prezzoUser.innerHTML = over65.toFixed(2) + '€'
            break
        case '3':
            prezzoUser.innerHTML = prezzo.toFixed(2) + '€'
    }
})

