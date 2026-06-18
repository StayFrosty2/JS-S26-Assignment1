// Variables
let total = 5;
let amountOfChoices = 6;

// Set of Arrays to store all of the options
let optionArray1 = ["My Mom", "My Dad", "My Dog", "My Sibling", "The Firefighter", "My Teacher"];
let optionArray2 = ["sat on", "talked to", "found", "worked with", "jumped over", "kissed"];
let optionArray3 = ["a silly", "an evil", "an awesome", "a suspicious", "a giant", "a tiny"];
let optionArray4 = ["Hedgehog", "Fox", "Cat", "Bug", "Crocodile", "Bird"];
let optionArray5 = ["in the wall", "on the roof", "at the school", "in the soup pot", "in the garage", "on the moon"];

// Variables track the user's choices, defaults to 0
let firstChoice = 0;
let secondChoice = 0;
let thirdChoice = 0;
let forthChoice = 0;
let fifthChoice = 0;

// Following elements show the user's choices
const userChoice1 = document.querySelector("#choice1");
const userChoice2 = document.querySelector("#choice2");
const userChoice3 = document.querySelector("#choice3");
const userChoice4 = document.querySelector("#choice4");
const userChoice5 = document.querySelector("#choice5");

// The p element which will contain the story when the user finishes
const story = document.querySelector("#story");

// The submit button for when the user has finished their story
const submit = document.querySelector("#submit");

// Function to update the page with the current selection
function updateUserChoices() {
    userChoice1.textContent = optionArray1[firstChoice];
    userChoice2.textContent = optionArray2[secondChoice];
    userChoice3.textContent = optionArray3[thirdChoice];
    userChoice4.textContent = optionArray4[forthChoice];
    userChoice5.textContent = optionArray5[fifthChoice];
}

// Updates the user choices at page load so they always have data in them
updateUserChoices();

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
    for (let j = 0; j < amountOfChoices; j++) {
        const newItem = document.createElement("li");
        newItem.textContent = tempArray[j];
        options.append(newItem);
    }
}


// Cycles the choices, then runs another function to update the page
function cycleOptions(option) {
    if (option === 1) {
        firstChoice++;
        if(firstChoice > total) {
            firstChoice = 0;
        }
    }
    else if (option === 2) {
        secondChoice++;
        if(secondChoice > total) {
            secondChoice = 0;
        }
    }
    else if (option === 3) {
        thirdChoice++;
        if(thirdChoice > total) {
            thirdChoice = 0;
        }
    }
    else if (option === 4) {
        forthChoice++;
        if(forthChoice > total) {
            forthChoice = 0;
        }
    }
    else {
        fifthChoice++;
        if(fifthChoice > total) {
            fifthChoice = 0;
        }
    }
    updateUserChoices();
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        cycleOptions(i + 1);
    });
}

// Updates the story on the page
function createStory() {
    story.textContent = `${optionArray1[firstChoice]} ${optionArray2[secondChoice]} ${optionArray3[thirdChoice]} ${optionArray4[forthChoice]} ${optionArray5[fifthChoice]}.`;
}

// Prevents the default function of the anchor being used as the submit button, then gives it the on click effect of calling create story
submit.addEventListener("click", (event) => {
    event.preventDefault();
    createStory();
});