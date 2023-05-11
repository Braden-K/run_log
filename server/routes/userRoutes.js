const { Router } = require("express");
const controller = require("../controllers/userController");

const router = Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.get("/:username", controller.getUserByUsername);
router.post("/", controller.addUser);
router.delete("/:id", controller.removeUser);

module.exports = router;
