"use strict";
/* GESTIONE DEGLI ERRORI: se la lunghezza dell'array è maggiore rispetto
alla differenza tra il numero massimo e mininimo (max - min) abbiamo un errore.
Modifico il codice precedente ed aggiungo una condizione if per il controllo e mostare,
nel caso, il messaggio d'errore.

È possibile gestire gli errori con il comando throw, oltre a fare un return implicito, segnala
alla funzione che non è stato possibile avere un return con un valore a causa di un errore.
Questo interromperà non solo la funzione, come nel primo controllo, ma interromperà l'intera applciazione.
*/
function seqRandNumber3(min, max, len) {
    //inizializzo l'array e lo popolo 
    var arr = [];
    while (arr.length < len) {
        //controllo che non ci siano ripetizioni di numeri all'interno dell'array
        var rn = randomNumber(min, max);
        if (arr.includes(rn)) {
            continue;
        }
        else {
            arr.push(rn);
        }
        //gestione degli errori
        /* if (len > max - min) {
                console.log(`Cannot find ${len} numbers between ${min} and ${max}`)
                return;
            }
        */
        // throw new Error(`Cannot find ${len} numbers between ${min} and ${max}`)
    }
    return arr;
}
var myRandArray2 = seqRandNumber3(1, 30, 10); //l'ultima cifra è la length dell'array, passata come parametro
console.log(myRandArray2);
