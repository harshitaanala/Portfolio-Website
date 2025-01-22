// Simple form validation function for the Contact Form
function validateForm() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("form-message");

    if (!email || !message) {
        formMessage.classList.add("error");
        formMessage.innerHTML = "Please fill out all fields!";
        return false;  // prevent form submission
    }

    formMessage.classList.remove("error");
    formMessage.classList.add("success");
    formMessage.innerHTML = "Thank you for your message. I will get back to you shortly!";
    return true;  // form will be submitted
}

// Dynamic Background Change for Button Click
document.querySelector("input[type='submit']").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f0f8ff";  // Light blue color change on form submission
});
