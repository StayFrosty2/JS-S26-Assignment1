// Variables
let total = 5;
let choices = 6;

// Set of Arrays to store all of the options
let optionArray1 = ["My Mom", "My Dad", "My Dog", "My Sibling", "The Firefighter", "My Teacher"];
let optionArray2 = ["sat on", "talked to", "found", "worked with", "jumped over", "kissed"];
let optionArray3 = ["a silly", "an evil", "an awesome", "a suspicious", "a giant", "a tiny"];
let optionArray4 = ["Hedgehog", "Fox", "Cat", "Bug", "Crocodile", "Bird"];
let optionArray5 = ["in the wall", "on the roof", "at the school", "in the soup pot", "in the garage", "on the moon"];

// Loop to display all of the options in the unordered lists
for (let i = 1; i <= total; i++) {
    // Get the target ul from the document
    const options = document.querySelector(`#options${i}`);
    
    // Set the array to be the one we need
    let tempArray;
    if (i === 1) {
        tempArray = optionArray1;
    }
    else if(i === 2) {
        tempArray = optionArray2;
    }
    else if(i === 3) {
        tempArray = optionArray3;
    }
    else if(i === 4) {
        tempArray = optionArray4;
    }
    else {
        tempArray = optionArray5;
    }

    // Loop through and add the list items for that ul
    for (let j = 0; j < choices; j++) {
        const newItem = document.createElement("li");
        newItem.textContent = tempArray[j];
        options.append(newItem);
    }
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll("button");
for (let i = 0; i = buttons.length; i++) {
    
}
