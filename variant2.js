let myArray = [1,2,3,4,5,6,7,8,9]; 

// функция с использование метода sort();
function SortArray(myArray) {
    myArray.forEach((el, i) => {
        el % 2 == 0 ? el : myArray.splice(i, 1);
    }); 
    return myArray;
}

console.log(SortArray(myArray));