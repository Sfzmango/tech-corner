// authentication middleware to check if user is logged in
const Auth = (req, res, next) => {

    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {

        // If the user is logged in, continue on to the rest of the route
        // We call next() if the user is authenticated
        next();
    }
};

module.exports = Auth;