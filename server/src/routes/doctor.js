const listAction = require("../actions/doctors/list.action");
const saveAction = require("../actions/doctors/save.action");
const detailAction = require("../actions/doctors/detail.action");
const updateAction = require("../actions/doctors/update.action");
const deleteAction = require("../actions/doctors/delete.action");
const router = require("express").Router();

router.get("/", listAction);
router.post("/", saveAction);
router.get("/:id", detailAction);
router.put("/:id", updateAction);
router.delete("/:id", deleteAction);
// router.post("/:id/send", sendMessageAction);

module.exports = router;
