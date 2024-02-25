function sumaPares(arr){
    return arr.reduce((total, num) => num % 2 === 0 ? total + num : total, 0);
}
console.log(sumaPares([1,2,3,4,5,6]));