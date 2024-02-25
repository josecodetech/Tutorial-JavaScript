function eliminaDuplicados(arr){
    return Array.from(new Set(arr));
}
console.log(eliminaDuplicados([1,2,3,4,5,6,71,8,9,10,1,2,3,10]));