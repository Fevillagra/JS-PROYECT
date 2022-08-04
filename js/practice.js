// Combinacion for...in y for...of, se recorre el arrayB y en caso de que el indice
//no sea igual a 3 se imprime el valor del arrayB con el indice "array", en caso de que
//si sea igual a 3 se recorre el arrayA y se imprime cada uno de los valores.

let arrayA = ['d', 'e', 'f'];
let arrayB = ['a', 'b', 'c', arrayA];

for( let array in arrayB) {
    if(array == 3) {
        for(let arrays of arrayA) {
            console.log(arrays);
        }
    } else {
        console.log(arrayB[array]);
    }
}

