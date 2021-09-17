let myArray = [5,4,3,2,1,6,7,8,9]; 

// функция с использование метода sort();
function SortArrayOne(myArray) {
    myArray.forEach((el, i) => {
        el % 2 == 0 ? el : myArray.splice(i, 1);
    }); 
    return myArray.sort();
}

// функция без использования метода sort();
function SortArrayTwo(myArray) {
    let copyMyArray = [];
    myArray.map(function(el, i) {
      copyMyArray[i] = el;
    });
    
    let finishArray = [];
    myArray.forEach((el, i) => {
        el % 2 == 0 ? el : copyMyArray.splice(i, 1);
        let minElIndex = copyMyArray.indexOf(Math.min.apply(null, copyMyArray)) // get the position of the minimum element of d
        let minEl = copyMyArray.splice(minElIndex, 1) // remove the minimum element from d and store it in s
        finishArray[i] = minEl // put s in the k array
    }); 

    return finishArray;
}

// node variant1.js in terminal
console.log(`SortArrayOne = ${SortArrayOne(myArray)}`);
console.log(`SortArrayOne = ${SortArrayTwo(myArray)}`);

