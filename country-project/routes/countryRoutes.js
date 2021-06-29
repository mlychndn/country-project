const express = require("express");
const countryController = require("../controllers/countryController");

const router = express.Router();
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });


router.route("/").get(countryController.getCountries);

router.route("/").post(upload.single("flag"),countryController.createCountry);

router.route("/:id").get(countryController.geCountry);

module.exports = router;
