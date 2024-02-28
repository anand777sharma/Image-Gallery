const cors= require('cors');
const express= require('express');
const storage = require("node-persist");
const dotenv=require('dotenv').config()


const app= express();
app.use(cors());
app.use(express.json());

//intialize storage
async function init(){
	await storage.init();
    console.log("Storage Initialized");
    
	// await storage.clear();
    // console.log('Storage cleared');
}
init()


app.use('/uploads',express.static('uploads'));
app.use(require("./route/routes"));

app.listen(process.env.PORT,()=>{
    
    console.log(`Server is listing on PORT: 5000`);
})