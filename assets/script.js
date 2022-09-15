
//stringa di partenza
let stringa = "Ciao sono Giuseppe"



//applicare metodi per caratteri maiuscoli e minuscoli

let upperChange = stringa.toUpperCase()
console.log(upperChange)

let lowerChange = stringa.toLowerCase()
console.log(lowerChange)



//suddividere nei suoi elementi

let lista1 = stringa.split()
console.log(lista1)

let lista2 = stringa.split("")
console.log(lista2)

let stringa2 = "Ciao, sono, Giuseppe"
let lista3= stringa2.split(",")
console.log(lista3)



//selezionarne due e concatenarli

let phrase = `${lista3['0']} io sono ${lista3['2']}`
console.log (phrase)



//crea un Array di persone

let primoArray = ["Aldo", "Giovanni", "Giacomo", "Enrico", "Mario"]
console.log (primoArray)


//leggi il terzo elemento
console.log(primoArray[2])

//assegna all'array un valore tramite variabile e leggi la lunghezza dell'array
console.log (primoArray.length) 
primoArray [5] = "Paolo"
console.log (`L'array è composta da ${(primoArray.length)} elementi`)

//Crea una funzione all'interno della quale utilizzerai i valori numerici tratti da un array

let Numbers = [1,2,3,4,5,6,7,8,9]

function showLuckyNumber() {
   
    let randomNumber = getRandomInteger(0, Numbers.length - 1)
    let luckyNumber = Numbers[randomNumber]
    document.getElementById(number-generator).innerHTML = luckyNumber

    console.log(randomNumber)

}


//usa i metodi push/pop e shift/unshift su un array


