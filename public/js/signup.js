// creates an account
const signupForm = async (event) => {
    event.preventDefault();

    let username = document.querySelector("#loginUsername").value.trim();
    let password = document.querySelector("#loginPassword").value.trim();

    if (username && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to sign up.");
        }
    }
};

// listens to clicks on the login button
document.querySelector(".signupBtn").addEventListener("submit", signupForm);