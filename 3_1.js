let radius = prompt("Enter the radius of the circle");

radius = parseFloat(radius);

function calculateCircleArea(radius) {
    if (typeof radius !== 'number' || isNaN(radius) || radius < 0) {
        return 'Please provide a valid positive number for radius';
    }
    
    const PI = Math.PI;
    return PI * radius * radius;
}

let result = calculateCircleArea(radius);

if (typeof result === 'number') {
    result = result.toFixed(2);
}

alert(`Area of the circle: ${result}`);