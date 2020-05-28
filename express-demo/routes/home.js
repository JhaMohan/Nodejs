const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.send("Hello world to express")
});



module.exports = router;