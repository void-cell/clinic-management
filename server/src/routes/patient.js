const listAction = require("../actions/patients/list.action");
const saveAction = require("../actions/patients/save.action");
const detailAction = require("../actions/patients/detail.action");
const updateAction = require("../actions/patients/update.action");
const deleteAction = require("../actions/patients/delete.action");
const router = require("express").Router();

router.get("/", listAction);
router.post("/", saveAction);
router.get("/:id", detailAction);
router.put("/:id", updateAction);
router.delete("/:id", deleteAction);
// router.post("/:id/send", sendMessageAction);

module.exports = router;
