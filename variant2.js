let myArray = [1,22,3,44,5,6,100,7,8,9,10,12]; 

function SortArrayV3(myArray) {
    myArray.forEach((el, i) => {
        el % 2 == 0 ? el : myArray.splice(i, 1);
    });

    console.log(`Массив четных чисел = ${myArray}`);
    
    for (let i = 0; i < myArray.length/2; i++) {
        let topEl = myArray[i];
        let bottomEl = myArray[myArray.length-1-i];
        myArray[i] = bottomEl;
        myArray[myArray.length-1-i] = topEl;
    }
    return myArray;
}

// node variant2.js in terminal
console.log(`Массив после сортировки = ${SortArrayV3(myArray)}`);