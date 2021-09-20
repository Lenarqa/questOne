let myArray = [1,100,33,4,5,6,7,8,9,10]; 

function SortArrayV3(myArray) {
    let finishArray = [];
    let oddElements = [];
    let evenElements = [];

    myArray.forEach((el, i) => {
        if(el % 2 == 0) {
            oddElements.push(el);
        }else{
            evenElements.push(el);
        }
    });

    const myQuickSort = (sortArr) => {
        if (sortArr.length == 0) return [];
        
        let a = [], b = [], p = sortArr[0];
        for (var i = 1; i < sortArr.length; i++)
        { 
            if (sortArr[ i ] < p) {
                a[a.length] = sortArr[ i ];
            } 
            else {
                b[b.length] = sortArr[ i ];
            }
        }
        return myQuickSort(a).concat(p, myQuickSort(b));
    };
    
    oddElements = myQuickSort(oddElements);
    evenElements = myQuickSort(evenElements);
    
    finishArray = oddElements.concat(evenElements);
    return finishArray;
}

// node variant3.js in terminal
console.log(`Массив после сортировки = ${SortArrayV3(myArray)}`);