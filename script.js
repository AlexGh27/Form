const form = document.querySelector("form");
const email = document.querySelector("#user_email");
const zip = document.querySelector("#user_zip");
const password = document.querySelector("#user_password");
const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address!");
        email.reportValidity();
    }
    else {
        email.setCustomValidity("");
    }
});


zip.addEventListener("input", (e) => {
    if (zip.validity.tooShort) {
        zip.setCustomValidity("The following zip code is too short!");
        zip.reportValidity();
    }
    else {
        zip.setCustomValidity("");
    }
});

password.addEventListener("input", (e) => {
    if (password.validty.tooShort) {
        password.setCustomValidity("Your password must have at least 8 characters");
    }
    if (password.validty.tooLong) {
        password.setCustomValidity("Your password must have up to 25 characters");
    }
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Your password must contain at least one lower capital letter, one upper capital letter and one number")
        password.reportValidity();
    }
});
