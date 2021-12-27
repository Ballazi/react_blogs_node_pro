const express = require("express");
const router = express.Router();
const ArrayofBlogs = require("../model/ArrayOfBlogs");



router.get("/",(req,res) => {
    res.status(200).json({successful:true,message:"successful...!"});
})








module.exports = router;