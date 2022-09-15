const authRoutes = require("./auth");
const appointmentRoutes = require("./appointment");
const doctorRoutes = require("./doctor");
const patientRoutes = require("./patient");
const { verifyAuth } = require("../security");
const router = require("express").Router();

router.use(verifyAuth);

router.use("/auth", authRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);

module.exports = router;
