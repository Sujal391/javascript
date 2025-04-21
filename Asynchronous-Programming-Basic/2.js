function squareWithPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * number;
            resolve(result);
        }, 1000);
    });
}

squareWithPromise(5)
    .then(result => console.log(result));