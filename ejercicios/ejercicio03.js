function sumaArreglo(arr){
    return arr.reduce((total, num) => total + num,0);
}
console.log(sumaArreglo([1,2,3,4,5]));