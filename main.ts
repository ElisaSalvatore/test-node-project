//Generare numero casuale
function randomNumber(min: number, max: number): number {
    const number = Math.trunc(Math.random() * (max - min) + min);
    return number;
}

//Rendere il numero casuale decimale
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
// console.log(randNumDec (1, 10, 5)); //tre cifre decimali


//Stampare una lista di numeri casuali 
function seqRandNumber(min: number, max: number, len: number) {
    const arr: number[] = [];

    for (let i = 0; i < len; i++) {
        arr.push(randomNumber(min, max))
    }

    return arr;
}
const myRandArray = seqRandNumber(1, 20, 20);//l'ultima cifra è la length dell'array, passata come parametro

console.log(myRandArray) 