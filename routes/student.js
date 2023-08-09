const express = require("express");
const { register, searchStudent } = require("../controller/studentController");
const router = express.Router();

router.post("/register", register);
router.get("/:id", searchStudent);
router.put("/:id", );
router.delete("/:id", );
module.exports = router;
