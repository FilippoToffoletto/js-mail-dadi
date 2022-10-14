
const mailRegistrate = [
    'ciao@gmail.com', 
    'mario@gmail.com',
    'mariorossi@gmail.com', 
    'filippo@gmail.com',
    'hello@gmail.com', 
    'html@gmail.com',
    'luca@gmail.com', 
    'fabio@gmail.com',
    'hi@gmail.com', 
    'css@gmail.com',
    'fabrizio@gmail.com', 
    'noccioline@gmail.com',
    'francesco@gmail.com', 
    'finestra@gmail.com',
    'gmail@gmail.com', 
    'giulia@gmail.com',
]
const verification = document.getElementById('mail');

const mail = prompt('Scrivi la tua mail per verificare la tua registrazione');


for(let i = 0; i < mailRegistrate.length; i++){
    let result = (mailRegistrate.includes(mail));
    if(result === true){
        verification.innerHTML = `La tua mail è presente nel nostro gestionale.`;
    }else{
        verification.innerHTML = `La tua mail non è presente nel nostro gestionale.`;
    }
    console.log(result);
}

/*

**Gioco dei dadi**

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?

*/




const button = document.querySelector('#bottone');
const result = document.getElementById('result');
const userNumber = document.getElementById('numberuser');
const pcNumber = document.getElementById('numberpc');


button.addEventListener('click', function(){
    let randomNumberUser = Math.floor(Math.random() * 12 + 2);
    let randomNumberPc = Math.floor(Math.random() * 12 + 2);
    if(randomNumberPc < randomNumberUser){
        result.innerHTML = 'hai vinto';
    }else if(randomNumberPc === randomNumberUser){
        result.innerHTML  = 'pareggio';
    }else{
        result.innerHTML = 'hai perso';
    }

    userNumber.innerHTML = (randomNumberUser);
    pcNumber.innerHTML = (randomNumberPc);
   

});


