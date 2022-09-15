const loginAction = require("../actions/auth/login.action");
const attemptLoginAction = require("../actions/auth/attempt-login.action");
const createUserAction = require("../actions/auth/create-user.action");
const profileAction = require("../actions/auth/profile.action");
const listAction = require("../actions/auth/list.action");

const router = require("express").Router();

router.get("/login", loginAction);
router.post("/login", attemptLoginAction);
router.post("/", createUserAction);

//DEV-ONLY
router.get("/profile/:id", profileAction);
router.get("/profile", listAction);

module.exports = router;
