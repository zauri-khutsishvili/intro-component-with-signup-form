const signUpForm = document.getElementById("sign-up-form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if (firstNameValue === "") {
        setErrorFor(firstName, "First Name cannot be empty");
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
        setErrorFor(lastName, "Last Name cannot be empty");
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email Address cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    } else if (passwordValue.length < 5) {
        setErrorFor(password, "Password is too short");
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const inputDiv = input.parentElement;
    const errorMessage = inputDiv.querySelector("small");
    const inputField = inputDiv.querySelector("input");

    errorMessage.innerText = message;
    inputDiv.classList.add("error");
    inputField.classList.add("error");
}

function setSuccessFor(input) {
    const inputDiv = input.parentElement;
    const errorMessage = inputDiv.querySelector("small");
    const inputField = inputDiv.querySelector("input");

    errorMessage.innerText = "";
    inputDiv.classList.remove("error");
    inputField.classList.remove("error");
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}