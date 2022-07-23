const password = document.querySelector("#user_password");
const confirm_password = document.querySelector("#confirm_password");
const message = document.querySelector("#validation-message");
const submitButton = document.querySelector("#create-button");

function confirmPassword() {
    if(password.value !== confirm_password.value) {
        message.textContent = "* Use same password";
        password.style.border = "2px dashed #ff0000";
        confirm_password.style.border = "2px dashed #ff0000";
        return false;
    }
    return true;
};

submitButton.addEventListener("click", function(event) {
    confirmPassword();
    if (confirmPassword() === false) {
        event.preventDefault();
    }; 
}, true);