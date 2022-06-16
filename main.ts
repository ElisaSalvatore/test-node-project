//GENERARE UN NUMERO CASUALE
function randomNumber(min: number, max: number): number {
    const number = Math.trunc(Math.random() * (max - min) + min);
    return number;
}

//RENDERE IL NUMERO CASUALE DECIMALE
/* Per ottenere un numero con due cifre decimali: nel return della funzione moltiplicare 
il min ed il max per 100, poi si divide il tutto per 100
 -> return number = (min * 100, max * 100).
Per ottenere un numero decimale con tre cifre dopo la virgola moltiplicare per 1000, etc.
Se creo la costante multFactor è più semplice gestire la potenza.
*/
function randNumDec(min: number, max: number, precision: number) {
    const multFactor = Math.pow(10, precision); //il metodo pow() esegue la potenza: come primo argomento si passa la base, come secondo l'esponente a cui fa riferimento. 
    return randomNumber(min * multFactor, max * multFactor) / multFactor;
}

// console.log(randNumDec (1, 10, 1)); //una cifra decimale
// console.log(randNumDec (1, 10, 2)); //due cifre decimali
// console.log(randNumDec (1, 10, 5)); //cinque cifre decimali

//STAMPARE UNA LISTA DI NUMERI CASUALI SENZA RIPETIZIONI
/* La cosa più semplice è continuare a generare numeri casuali controllando che non un numero non si ripeta,
ovvero che non siano già presenti all'interno della lista di numeri generati
*/
function seqRandNumber(min: number, max: number, len: number) {

    //inizializzo l'array e lo popolo 
    const arr: number[] = [];
    
    while (arr.length < len) {
        //controllo che non ci siano ripetizioni di numeri all'interno dell'array
        const rn = randomNumber(min, max);
        if (arr.includes(rn)) {
            continue;
        } else {
            arr.push(rn);
        }

        //gestione degli errori
        if (len > max - min) {
            console.log(`Cannot find ${len} numbers between ${min} and ${max}`)
            return;
        }
    }
    return arr;
}
const myRandArray = seqRandNumber(1, 30, 10); //l'ultima cifra è la length dell'array, passata come parametro
console.log(myRandArray) ;

/* GESTIONE DEGLI ERRORI: se la lunghezza dell'array è maggiore rispetto 
alla differenza tra il numero massimo e mininimo (max - min) abbiamo un errore.
Modifico il codice precedente ed aggiungo una condizione if per il controllo e mostare,
nel caso, il messaggio d'errore.
*/
