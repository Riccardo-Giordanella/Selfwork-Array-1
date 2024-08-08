let array1 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];
let array2 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

// Ordinamento decrescente
const decreasing = array1.sort((a, b)=> b - a);

console.log(decreasing);

// Ordinamento crescente
const increasing = array2.sort((a, b)=> a - b);

console.log(increasing);

// Fine esercizio