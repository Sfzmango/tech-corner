const router = require('express').Router();
const Auth = require('../utils/auth');

const { User, Post } = require('../models');

// home page
router.get("/", async (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login
router.get("/login", async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// signup
router.get("/signup", async (req, res) => {
    try {
        res.render("signup");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// dashboard
router.get("/dashboard", async (req, res) => {
    try {
        res.render("dashboard");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// 404
router.get("/404", async (req, res) => {
    try {
        res.render("error");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;