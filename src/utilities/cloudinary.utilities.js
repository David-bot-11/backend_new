import { v2 } from "cloudinary";
import { log } from "console";
import fs from "fs"

cloudinary.config({

    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});
 
const uploadOnCloudinary = async (localFilePath)=> {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            response_type:"auto"
        })
        console.log("file has be uploaded to cloudinary:"
            ,response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
        
    }
} 
export {uploadOnCloudinary}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    {public_id:"olympic flag"},
    function(error,result){console.log(result);});
