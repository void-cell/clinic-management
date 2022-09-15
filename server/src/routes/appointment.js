const listAction = require("../actions/appointments/list.action");
const saveAction = require("../actions/appointments/save.action");
const detailAction = require("../actions/appointments/detail.action");
const updateAction = require("../actions/appointments/update.action");
const deleteAction = require("../actions/appointments/delete.action");
const router = require("express").Router();

router.get("/", listAction);
router.post("/", saveAction);
router.get("/:id", detailAction);
router.put("/:id", updateAction);
router.delete("/:id", deleteAction);

module.exports = router;
