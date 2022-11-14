const form = document.querySelector("form");
const email = document.querySelector("#user_email");
const zip = document.querySelector("#user_zip");

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address!");
    }
    else {
        email.setCustomValidity("");
    }
});


zip.addEventListener("input", (e) => {
    if (zip.validity.tooShort) {
        zip.setCustomValidity("The following zip code is too short")
    }
    else {
        zip.setCustomValidity("");
    }
});