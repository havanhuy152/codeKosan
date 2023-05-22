const router = require("express").Router();
const authorController = require("../controller/authorController");



router.post("/", authorController.addAuthor);
router.get("/", authorController.getAllAuthor);
router.get("/:id", authorController.getAnAuthor);
router.put("/:id",authorController.updateAuthor)

module.exports = router;