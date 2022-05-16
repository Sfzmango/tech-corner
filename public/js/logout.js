// logs the user out
const logout = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("Logout Error.");
    }
};

// executes the logout function when clicking the logout button
document.querySelector("#logout").addEventListener("click", logout);
