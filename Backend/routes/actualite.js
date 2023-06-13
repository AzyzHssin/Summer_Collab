const express = require("express");
const {createNews,fetchNews,deleteOne,updateOne
} = require("../controllers/actualiteController");


const router = express.Router();

router.route("/").post(createNews);
router.route("/").get(fetchNews);
router.route("/:id").delete(deleteOne);
router.route("/").put(updateOne);

module.exports = router;