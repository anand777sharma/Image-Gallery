const express = require ('express')
const upload=require("../controller/fileUpload")
const {getallimage,uploadimage,deleteimage} =require("../controller/controller")
const router=express.Router()

router.get("/getallimage",getallimage)
router.post("/uploadimage",upload.single('image'),uploadimage)
router.delete("/deleteimage/:imagetitle",deleteimage)

module.exports=router;
