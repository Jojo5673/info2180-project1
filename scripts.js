/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    const form  = document.getElementsByTagName("form")[0];
    const messageBox = document.getElementsByClassName("message")[0];
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let input = event.target[0];
        let email = input.value;
        messageBox.textContent = email !== ""?`Thank you! Your email address ${email} has been added to our mailing list!`:"Please enter a valid email address";
        input.value = "";
    });
});