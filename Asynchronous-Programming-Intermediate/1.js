// 2.1 Promise chaining

function promiseChainingExample() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(5), 1000);
    })
    .then(result => {
        console.log(`First result: ${result}`);
        return result * 2; 
    })
    .then(result => {
        console.log(`Second result: ${result}`);
        return result + 3; 
    })
    .then(finalResult => {
        console.log(`Final result: ${finalResult}`);
        return finalResult;
    })
    .catch(error => {
        console.error(`Error occurred: ${error}`);
    });
}

promiseChainingExample();