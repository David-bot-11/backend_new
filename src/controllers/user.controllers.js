import { asyncHandler } from "../utilities/asyncHandler.utilities";

const registerUser = asyncHandler(async (req,res) =>
{
        return res.status(300).json({
            message:"ok"
        })  
} )


export {registerUser}