// 1.1 Extract the first name and last name into separate variables 

let userName = prompt("Enter your First name and Last name").trim();
        
let nameParts = userName.split(' ');
let firstName = nameParts[0];
let lastName = nameParts.slice(1).join(' ');    
        
alert("Your First name is : " +firstName);
alert("Your Last name is : " +lastName);