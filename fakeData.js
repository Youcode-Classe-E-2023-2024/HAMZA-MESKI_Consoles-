const signUpDisplay = document.querySelector(".sign-up-display");
const signUp = document.querySelectorAll(".sign-up");
const signCancel = document.querySelectorAll(".sign-cancel");
const Enter = document.querySelector(".Enter");
const Email = document.querySelector(".Email");
const Password = document.querySelector(".Password");
const signUpButton = document.querySelector(".sign-up-button");
const personalEmail = document.querySelector(".personal-email");
const personalPassword = document.querySelector(".personal-password");

console.log(personalEmail, personalPassword);

// Initialize data from local storage or create an empty array
let signedPersons = JSON.parse(localStorage.getItem("signedPersons")) || [];
let index = signedPersons.length;

// open sign-up page:
for (const sign of signUp)
    sign.addEventListener("click", function () {
        signUpDisplay.classList.toggle("hidden");
    });

// close sign-up page:
for (const cancel of signCancel)
    cancel.addEventListener("click", function () {
        signUpDisplay.classList.toggle("hidden");
    });

// Get started processing:
Enter.addEventListener("click", function () {
    if (!Email.value || !Password.value) {
        alert("Enter Your Email & Password!");
        return;
    }

    // Use a flag to track if a matching entry is found
    let userFound = false;

    signedPersons.forEach(data => {
        if (data.email === Email.value && data.password === Password.value) {
            userFound = true;
            window.location.href = "main.html";
        } else if (data.email === Email.value && data.password !== Password.value) {
            userFound = true;
            alert("Wrong Password!");
        }
    });
    
    if (!userFound) {
        alert("You didn't sign up before with that email!");
    }
    
});

// sign-up Processing:
signUpButton.addEventListener("click", function () {
    if (personalEmail.value && personalPassword.value) {
        // Check if the email already exists in the reserved data
        let emailExists = signedPersons.some(data => data.email === personalEmail.value);
        if (emailExists) {
            alert("Email already exists!");
        } else {
            // Add new user data to the signedPersons array
            signedPersons.push({
                email: personalEmail.value,
                password: personalPassword.value
            });

            // Save data in local storage
            localStorage.setItem("signedPersons", JSON.stringify(signedPersons));

            // Incrementing index is no longer necessary
            console.log(signedPersons);

            // Closing the sign-up page:
            signUpDisplay.classList.toggle("hidden");
        }
    } else {
        alert("Email or Password is not valid!");
    }
});
