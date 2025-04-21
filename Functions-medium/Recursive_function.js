// Recursive function

function flattenArray(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

const nestedArray = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]];
console.log(flattenArray(nestedArray)); 