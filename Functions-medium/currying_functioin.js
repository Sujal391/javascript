// Currying function

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...moreArgs) {
            return curried(...args, ...moreArgs);
        };
    };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));     
console.log(curriedAdd(1, 2)(3));   
console.log(curriedAdd(1)(2, 3));    
console.log(curriedAdd(1, 2, 3));