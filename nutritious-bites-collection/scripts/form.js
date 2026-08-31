document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("We appreciate your submission! Thank you!");
    e.target.reset();
});