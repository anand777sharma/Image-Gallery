const storage = require("node-persist");


const uploadimage = async (req, res) => {
    try {
        const image= req.file.path;
       
        const { imagetitle } = req.body;
        await storage.setItem(imagetitle,{image,imagetitle});
        res.status(201).send("image added Succesfully")
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}


const getallimage = async (req, res) => {
    try {
        const gallery = await storage.values();
        res.status(200).send(gallery);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteimage = async (req, res) => {
    try {
        const imagetitle  = req.params.imagetitle;
        await storage.removeItem(imagetitle);
        res.status(200).send("Image deleted successfully");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}



module.exports = { getallimage, uploadimage, deleteimage }