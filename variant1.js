let myArray = [5,4,3,2,1,6,7,8,9]; 

// функция с использование метода sort();
function SortArrayOne(myArray) {
    myArray.forEach((el, i) => {
        el % 2 != 0 ? el : myArray.splice(i, 1);
    }); 
    console.log(myArray);
    return myArray.sort();
}

// функция без использования метода sort();
function SortArrayTwo(myArray) {
    myArray.forEach((el, i) => {
        el % 2 != 0 ? el : myArray.splice(i, 1);
    }); 

    let copyMyArray = [];
    myArray.map(function(el, i) {
        copyMyArray[i] = el;
    });
    
    let finishArray = [];
    myArray.forEach((el, i) => {
        let minElIndex = copyMyArray.indexOf(Math.min.apply(null, copyMyArray)) 
        let minEl = copyMyArray.splice(minElIndex, 1)[0]
        finishArray[i] = minEl
    });
    console.log(finishArray);
    return finishArray;
}

// node variant1.js in terminal
// console.log(`SortArrayOne = ${SortArrayOne(myArray)}`);
console.log(`SortArrayOne = ${SortArrayTwo(myArray)}`);

