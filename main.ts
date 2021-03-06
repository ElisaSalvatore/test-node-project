//GENERARE UN NUMERO CASUALE
function randomNumber(min: number, max: number): number {
    const number = Math.trunc(Math.random() * (max - min) + min);
    return number;
}

//RENDERE IL NUMERO CASUALE DECIMALE
function randNumDec(min: number, max: number, precision: number) {
    const multFactor = Math.pow(10, precision); 

    if ( !Number.isInteger(precision)) {
        throw new Error (`Error: precision (${precision}) must be an integer number`);
        //console.log(`Error: precision (${precision}) must be an integer number`);
    } else if (precision < 0) {
        throw new Error(`Error: precision (${precision}) must be a positive number`);
        //console.log(`Error: precision (${precision}) must be a positive number`);
    }
    return randomNumber(min * multFactor, max * multFactor) / multFactor;
}
//console.log(randNumDec (1, 10, 5)); //precision con due cifre decimali

//STAMPARE UNA LISTA DI NUMERI CASUALI SENZA RIPETIZIONI
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

        //gestire gli errori
        if (len > max - min) {
            console.log(`Cannot find ${len} numbers between ${min} and ${max}`)
            return;
        }
    }
    return arr;
}
//const myRandArray = seqRandNumber(1, 30, 5); //(min, max, len)

//RUOTE SUPERENALOTTO
const ruote =['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale']

const estrazioni: { [routa: string]: any } = {};

for (const ruota of ruote) {
    const estrazione = seqRandNumber(1, 30, 5); //(min, max, len)
    estrazioni[ruota] = estrazione;

}
//END RUOTE SUPERENALOTTO

function createRuotaContainer (ruotaName: string, estrazioni: number[]){
    //div con titolo
    const ruotaDiv = document.createElement('div');
    ruotaDiv.className = `ruota ${ruotaName.toLowerCase()}`;
    const nameH2 = document.createElement('h2');
    nameH2.innerText = ruotaName;
    nameH2.className = 'ruota-title';
    ruotaDiv.appendChild(nameH2);

    //paragrafo con div dei numeri
    for (const num of estrazioni) {
        const numP = document.createElement('p');
        numP.innerText = '' + num;
        const numDiv = document.createElement('div');
        numDiv.className = 'ruota-estrazione';
        numDiv.appendChild(numP);
        ruotaDiv.appendChild(numDiv);
    }

    return ruotaDiv;
}

const container = document.getElementById('container');
if (container) {
    const pre = document.createElement('pre');

    for (let ruota of ruote) {
        const ruotaEstrazioni = estrazioni[ruota];
        const ruotaDiv = createRuotaContainer(ruota, ruotaEstrazioni);
        container.appendChild(ruotaDiv);
    }
}


