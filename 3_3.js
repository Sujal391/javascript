const originalArray = [1, 2, 3, 4, 5];

function addElement(array, element) {

    return [...array, element];
}

const newArray = addElement(originalArray, 6);

console.log('Original array:', originalArray);  
console.log('New array:', newArray);          

console.log('Original array still the same:', originalArray); 