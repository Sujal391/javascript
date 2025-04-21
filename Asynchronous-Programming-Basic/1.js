function squareWithCallback(number, callback) {
    if (typeof number !== 'number' || isNaN(number)) return;
    setTimeout(() => {
        const result = number * number;
        callback(result);
    }, 1000);
}

squareWithCallback(prompt("Enter a number"), (result) => {
    console.log(result);
});