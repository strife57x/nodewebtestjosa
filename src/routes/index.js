const express = require("express");

const router = express.Router();

router.get("/",(req,res) =>{
    //res.sendFile(__dirname+"/views/index.html");
    res.render("index",{title: "Home"});
});
router.get("/contact",(req,res) =>{
    res.render("contact",{title: "Contact"});
});

module.exports = router;