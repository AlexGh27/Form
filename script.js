const form = document.querySelector("form");
const email = document.querySelector("#user_email");
const zip = document.querySelector("#user_zip");
const password = document.querySelector("#user_password");
const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const confirmation = document.querySelector("#user_confirm");

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
    if (!pass.test(password)) {
        password.setCustomValidity("Your password must have 8-15 characters, at least one lowercase letter, one uppercase letter, one numeric digit and one special character.")
        password.reportValidity();
    }
    else {
        password.setCustomValidity("");
        password.reportValidity();
    }
});

confirmation.addEventListener("input", (e) => {
    if (!password == confirmation) {
        confirmation.setCustomValidity("");
    }
    else {
        confirmation.setCustomValidity("The passwords do not match!");
        confirmation.reportValidity();
    }
})