function bubbleSortingAlgorithm(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length-i-1; j++){
            if(array[j]>array[j+1]){
              let temp = array[j];
              array[j] = array[j+1];
              array[j+1] = temp ;
            } 
        } 
    }
    return array ;
}
var unsortedArray = [6,4,0,3,-2,1];
var sortedArray = bubbleSortingAlgorithm(unsortedArray);
console.log(sortedArray);