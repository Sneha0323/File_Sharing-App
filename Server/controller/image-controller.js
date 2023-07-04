import File from "../models/file.js"


export const uploadImage = async (req,res)=>{
    
    // console.log(req);
    // return res.status(200).json({msg:'hello'});
    
    const fileObj={
        path: req.file.path,
        name:req.file.originalname
    }
    try {
        const file =await File.create(fileObj)
        console.log(file)
        res.status(200).json({path: `http://localhost:8023/file/${file}` })
        
    } catch (error) {
        console.error(error.message)
    }
}