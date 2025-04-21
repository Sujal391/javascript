// Write a function that capitalizes the first letter of each word in a sentence 

let sentence = prompt('Enter a Sentence').trim();

function capitalizedFirstLetter(sentence){
    let words = sentence.split(' ');
    let capitalizedWords = words.map((words)=>(words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()));
    alert(capitalizedWords.join(' '));
}

capitalizedFirstLetter(sentence);