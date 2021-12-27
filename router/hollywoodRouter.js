const express = require("express");
const router = express.Router();
const ArrayofBlogs = require("../model/ArrayOfBlogs");


router.get("/",(req,res) => {
    let cat = req.query.category;
    // console.log(cat);
    let arr = ArrayofBlogs.filter((val) => val.category === cat);
    res.status(200).json({successful:true,message:"successful...!",arr});
})



module.exports = router;