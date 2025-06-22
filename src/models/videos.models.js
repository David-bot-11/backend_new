import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema= new Schema(
    {
        videoFile:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number, //Using Cloudinary
            required:true
        },
        views:{
            type:Number, //Using Cloudinary
            default:0
        },
        isPublished:{
            type:Boolean, 
            required:true
        },
        owner:{
            type:Schema.Types.ObjectId, //Using Cloudinary
            ref:"User"
        },


    }
)
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)
