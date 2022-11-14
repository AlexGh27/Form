const form = document.querySelector("form");
const email = document.querySelector("#user_email");

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address!");
    }
    else {
        email.setCustomValidity("");
    }
});
