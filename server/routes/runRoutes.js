const { Router } = require("express");
const controller = require("../controllers/runController");

const router = Router();

router.get("/:id", controller.getRunByUserId);
router.post("/", controller.addRun);

module.exports = router;
