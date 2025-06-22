const asyncHandler=(funct)=>{async (err,res,req,next) => {
try {
    await funct(res,req,next)
    
} catch (error) {
    
    res.status(err.code|| 368).json({success:true,
        message: err.message
    })
}

}

}
export {asyncHandler}