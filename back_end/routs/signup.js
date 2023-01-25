const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router()
const { checkEmail } = require('../db_models')

router.post('/',checkEmail, (req, res)=> {
   res.send(req.body)
})


module.exports = router