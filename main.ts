//GENERARE UN NUMERO CASUALE
function randomNumber(min: number, max: number): number {
    const number = Math.trunc(Math.random() * (max - min) + min);
    return number;
}

//RENDERE IL NUMERO CASUALE DECIMALE
/* Per ottenere un numero con due cifre decimali: nel return della funzione 
moltiplicare il min ed il max per 100, poi si divide il tutto per 100
    -> return number = (min * 100, max * 100).
Per ottenere un numero decimale con tre cifre dopo la virgola moltiplicare per 1000, etc.
Se creo la costante multFactor è più semplice gestire la potenza.
*/
function randNumDec(min: number, max: number, precision: number) {
    //il metodo pow() esegue la potenza: come primo argomento si passa la base, come secondo l'esponente a cui fa riferimento. 
    const multFactor = Math.pow(10, precision);
    return randomNumber(min * multFactor, max * multFactor) / multFactor;
}

// console.log(randNumDec (1, 10, 1)); //una cifra decimale
// console.log(randNumDec (1, 10, 2)); //due cifre decimali
// console.log(randNumDec (1, 10, 5)); //cinque cifre decimali


//STAMPARE UNA LISTA DI NUMERI CASUALI
/*
    function seqRandNumber(min: number, max: number, len: number) {
        const arr: number[] = [];

        for (let i = 0; i < len; i++) {
            arr.push(randomNumber(min, max))
        }


        return arr;
    }
    const myRandArray = seqRandNumber(1, 20, 20);//l'ultima cifra è la length dell'array, passata come parametro

    console.log(myRandArray) 
*/

//STAMPARE UNA LISTA DI NUMERI CASUALI SENZA RIPETIZIONI
/* La cosa più semplice è continuare a generare numeri casuali controllando che non un numero non si ripeta,
ovvero che non siano già presenti all'interno della lista di numeri generati
*/
function seqRandNumber(min: number, max: number) {
    const arr: number[] = [];

    while (arr.length < 20) {
        const rn = randomNumber(min, max);
        if (arr.includes(rn)) {
            continue;
        } else {
            arr.push(randomNumber(min, max));
        }
    }
    return arr;
}
const myRandArray = seqRandNumber(1, 30);
console.log(myRandArray) ;