function withLogging(fn) {
    return function(a, b) {

        console.log('Input:', a, b);
        const result = fn(a, b);
        console.log('Output:', result);
        
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const loggedAdd = withLogging(add);

loggedAdd(5, 3);
