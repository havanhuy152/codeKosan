const bookController = require("../controller/bookController");

const router = require("express").Router();


router.post("/", bookController.addBook);
router.get("/", bookController.getAllBook);
router.get("/:id", bookController.getAnBook);
router.put("/:id", bookController.updateBook);

module.exports = router;