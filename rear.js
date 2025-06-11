let user = localStorage.getItem("loggedInUser");

        if (user) {
            document.getElementById("welcomeMessage").textContent = "Hello, " + user + "!";
        } else {
            window.location.href = "login.html"; // Redirect back if not logged in
        }

        function logout() {
            localStorage.removeItem("loggedInUser"); // Clear session
            window.location.href = "login.html"; // Redirect back to login
        }
