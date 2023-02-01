// 1. Dichiarare i vari elementi del document
 let kmElement = document.querySelector('#train input[type="email"]')
 let chooseCity = document.querySelector('#train input[type="city"]')
 let scontoElement = document.querySelector('#train select[name="color"]')
 let btnElement = document.querySelector('#train input[type="button"]')
 let prezzoUser = document.querySelector('.prezzo-finale')
 let nameUser = document.querySelector('#train input[type="name"]')
 let surName = document.querySelector('#train input[type="surname"]')
 console.log(nameUser)
 
 console.log( kmElement, scontoElement, btnElement)


// 3. Collegare i vari elementi al button

btnElement.addEventListener('click', function () {
    console.log('questa')

    let kmUser = kmElement.value
    let scontoUser = scontoElement.value
    console.log(kmUser, scontoUser)

    let nameElement = nameUser.value
    console.log(nameElement)
    
    let surNameElement = surName.value
    console.log(surNameElement)

    let cityElement = chooseCity.value
    console.log(cityElement) 

    let prezzo = kmUser * 0.21
        console.log(prezzo)

    let under18 = (prezzo * 20) / 100
        console.log(under18)

    let over65 = (prezzo * 40) / 100
        console.log(under18)
    

    switch (scontoUser) {
        case '1':
            prezzoUser.innerHTML = under18 + '€'
            break
        case '2':
            prezzoUser.innerHTML = over65 + '€'
            break
        case '3':
            prezzoUser.innerHTML = prezzo + '€'
    }
})

