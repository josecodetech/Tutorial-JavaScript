function elementosComunes(arr1, arr2){
    return arr1.filter(num => arr2.includes(num));
}
console.log(elementosComunes([1,2,3,4,5], [2,3,4,5,6]));