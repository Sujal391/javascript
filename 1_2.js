// Create an object that maps color names to their hexadecimal values 

let userColor = prompt("Enter a color (red, green, or blue)").toLowerCase().trim();

const colors = ['red', 'green', 'blue'];

const colorHexMap = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF'
};

alert(`${userColor} color's hexadecimal value is ` +colorHexMap[userColor]);