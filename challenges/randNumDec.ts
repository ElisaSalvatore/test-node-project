//GENERARE UN NUMERO CASUALE
function randomNumber1(min: number, max: number): number {
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
function randNumDec1(min: number, max: number, precision: number) {
    const multFactor = Math.pow(10, precision); //il metodo pow() esegue la potenza: come primo argomento si passa la base, come secondo l'esponente a cui fa riferimento. 
    return randomNumber1(min * multFactor, max * multFactor) / multFactor;
}

// console.log(randNumDec1 (1, 10, 1)); //una cifra decimale
// console.log(randNumDec1 (1, 10, 2)); //due cifre decimali
// console.log(randNumDec1 (1, 10, 5)); //cinque cifre decimali