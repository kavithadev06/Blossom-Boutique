const password = document.getElementById("Password");
const togglePassword = document.getElementById("togglePassword");

// Hide eye initially
togglePassword.style.display = "none";

// Show eye when typing
password.addEventListener("input", function () {
    if (password.value.length > 0) {
        togglePassword.style.display = "block";
    } else {
        togglePassword.style.display = "none";
        password.type = "password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
});

// Toggle password visibility
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        password.type = "password";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    }
});
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", function () {

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        return;
    }

    if (subject === "") {
        document.getElementById("subjectError").textContent = "Please enter subject";
        return;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Please enter your message";
        return;
    }

    alert("Message Sent Successfully!");
});
document.getElementById("contactName").addEventListener("input", function () {
    document.getElementById("nameError").textContent = "";
});

document.getElementById("contactEmail").addEventListener("input", function () {
    document.getElementById("emailError").textContent = "";
});

document.getElementById("contactSubject").addEventListener("input", function () {
    document.getElementById("subjectError").textContent = "";
});

document.getElementById("contactMessage").addEventListener("input", function () {
    document.getElementById("messageError").textContent = "";
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});
const topBtn = document.getElementById("topBtn");

// Show button only at bottom
window.addEventListener("scroll", function () {

    console.log(window.scrollY);
    console.log(document.documentElement.scrollHeight);

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

// Scroll to top
topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
console.log(topBtn);
