// GIOCO DEI DADI
let diceResult = document.getElementById('dice-result');
// estrazione numeri
let randomPcNumber = Math.floor(Math.random() * 6) + 1;
let randomUserNumber = Math.floor(Math.random() * 6) + 1;
let numOutput =`Il numero del computer è: ${randomPcNumber}. Il tuo numero è: ${randomUserNumber}`;
let deskNum = document.getElementById('numeri')
deskNum.innerHTML = numOutput
// comparo chi vince e stampo
if(randomPcNumber > randomUserNumber) {
    diceResult.innerHTML = `${randomPcNumber}>${randomUserNumber} HA VINTO IL COMPUTER`
} else if(randomUserNumber > randomPcNumber) {
    diceResult.innerHTML = `${randomPcNumber}<${randomUserNumber} COMPLIMENTI HAI VINTO`
} else if(randomPcNumber === randomUserNumber) {
    diceResult.innerHTML = `${randomPcNumber}=${randomUserNumber} PAREGGIO!`
}

