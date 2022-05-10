// checks login
const loginForm = async (event) => {
    event.preventDefault();

    let email = document.querySelector('#loginUsername').value.trim();
    let password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

// creates an account
const signupForm = async (event) => {
    event.preventDefault();

    let email = document.querySelector('#loginUsername').value.trim();
    let password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

// listens to clicks on the login and signup buttons
document.querySelector('.loginBtn').addEventListener('submit', loginForm);
document.querySelector('.signupBtn').addEventListener('submit', signupForm);