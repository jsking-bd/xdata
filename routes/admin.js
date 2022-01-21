const path = require('path')

const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
router.get("/add-product", (req, res, next) => {
    // console.log("This is Middleware");
    
    // res.send("Add to Product");
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"> <button type="submit">+</button></form>');
  
    // Next is used for -> next instruction
    // next();

    //.....
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))

});

router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
     res.redirect('/')
  });

  module.exports = router;