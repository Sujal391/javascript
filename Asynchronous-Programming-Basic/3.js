function squareWithPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * number;
            resolve(result);
        }, 1000);
    });
}

async function squareAsync(number) {
    const result = await squareWithPromise(number);
    return result;
}

async function run() {
    const result = await squareAsync(5);
    console.log(result);
}
run();