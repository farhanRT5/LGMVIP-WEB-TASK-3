// Get references to the HTML elements
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');
const num1 = document.getElementById('num1');
const dat1 = document.getElementById('dat1');
const genderOptions = document.getElementsByName('gender');
const courseOptions = document.getElementsByName('course');
const adds1 = document.getElementById('adds1');
const re = document.getElementById('re');

// Function to create a div element with the given data
function createDataDiv(data) {
    const div = document.createElement('div');
    div.className = 'data-entry';
    div.textContent = data;
    return div;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected gender value
    let selectedGender = '';
    for (const genderOption of genderOptions) {
        if (genderOption.checked) {
            selectedGender = genderOption.nextElementSibling.textContent;
            break;
        }
    }

    // Get the selected course value
    let selectedCourse = '';
    for (const courseOption of courseOptions) {
        if (courseOption.checked) {
            selectedCourse = courseOption.nextElementSibling.textContent;
            break;
        }
    }

    //Get the selected country value
    const selectedcountry = document.querySelector('select').value;

    // Create a string with the collected data
    const formData = `
        Full Name: ${txt1.value}
        Email Address: ${txt2.value}
        Phone Number: ${num1.value}
        Birth Date: ${dat1.value}
        Gender: ${selectedGender}
        Course: ${selectedCourse}
        Address: ${adds1.value}
        Country: ${selectedcountry}
    `;

    // Create a pre element for the new data entry
    const dataEntry = document.createElement('pre');
    dataEntry.textContent = formData;

    // Append the new data entry to the existing content in the <p> tag
    re.appendChild(dataEntry);
}

// Add an event listener to the form for submission
const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
