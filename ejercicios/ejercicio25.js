function sumaParObjetivo(arr, objetivo){
    const set = new Set();
    for (let num of arr){
        if (set.has(objetivo - num)){
            return true;
        }
        set.add(num);
    }
    return false;
}
console.log(sumaParObjetivo([1,2,3,4,5], 9));