function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("result").textContent = "Please fill in both fields.";
    } else if (username === "admin" && password === "password123") {
        localStorage.setItem("loggedInUser", username); // Store username
        window.location.href = "dashboard.html"; // Redirect to another page
    } else {
        document.getElementById("result").textContent = "❌ Incorrect username or password.";
    }
}
