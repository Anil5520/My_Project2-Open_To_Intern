const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")


router.post("/functionup/colleges", collegeController.createCollege)
router.post("/functionup/interns", internController.createInterns)
router.get("/functionup/collegeDetails", collegeController.getCollegeData)


router.all('/*', function (req, res) {
    res.status(400).send({ status: false, messsage: "invalid http request" })
})


module.exports = router; 