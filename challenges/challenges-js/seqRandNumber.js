"use strict";
// 1) STAMPARE UNA LISTA DI NUMERI CASUALI 
function seqRandNumber1(min, max, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(randomNumber1(min, max));
    }
    return arr;
}
//const myRandArray1 = seqRandNumber1, 20, 20);//l'ultima cifra è la length dell'array, passata come parametro
//console.log(myRandArray1) 
// 2) STAMPARE UNA LISTA DI NUMERI CASUALI SENZA RIPETIZIONI
/* La cosa più semplice è continuare a generare numeri casuali controllando che non un numero non si ripeta,
ovvero che non siano già presenti all'interno della lista di numeri generati
*/
function seqRandNumber2(min, max, len) {
    //inizializzo l'array e lo popolo 
    var arr = [];
    while (arr.length < len) {
        //controllo che non ci siano ripetizioni di numeri all'interno dell'array
        var rn = randomNumber1(min, max);
        if (arr.includes(rn)) {
            continue;
        }
        else {
            arr.push(rn);
        }
    }
    return arr;
}
var myRandArray1 = seqRandNumber2(1, 30, 5); //l'ultima cifra è la length dell'array, passata come parametro
console.log(myRandArray1);
