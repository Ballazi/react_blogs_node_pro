const express = require("express");
const router = express.Router();
const ArrayofBlogs = require("../model/ArrayOfBlogs");


router.get("/",(req,res) => {
    let arr = ArrayofBlogs.filter((val) => val.category === "Bollywood");
    res.status(200).json({successful:true,message:"successful...!",arr});
})



module.exports = router;