// Chiedi all’utente la sua email,
const verifiedMail = ['lucioghedina@gmail.com', 'lucio@gmail.com', 'mail@test.com', 'test@test.test'];

const mailCheck = prompt('Dimmi la tua mail');

let diceResult = document.getElementById('dice-result');
// controlla che sia nella lista di chi può accedere,
let mailFound = false;
let success = document.getElementById('success-mail');
for(let i = 0; i < verifiedMail.length; i++) {
    const thisMail = verifiedMail[i];
    
    // stampa un messaggio appropriato sull’esito del controllo.
    if(thisMail === mailCheck) {
        mailFound = true;
        // if(mailFound = true) {
        //     success.innerHTML = 'SUCCESS MAIL CHECK'
        //     diceResult.classList.remove('hidden')
        // }
    }
}
if(mailFound === true) {
    success.innerHTML = 'SUCCESS MAIL CHECK'
    diceResult.classList.remove('hidden')
} else {
    success.innerHTML = 'MAIL NON CONFERMATA, PROVA CON mail@test.com'
    diceResult.classList.add('hidden')
}
// GIOCO DEI DADI
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

