// Compose function
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((result, fn) => fn(result), x);
    };
}

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const compute = compose(square, double, addOne);
console.log(compute(2));