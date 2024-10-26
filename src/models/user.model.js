import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from bcrypt;

const userSchema=new mongoose.Schema({
    userName: {
        type:String,
        unique:true,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
      type: String,
      required:true,
      unique: true,

    },
    fullName:{
        type: String,
        true:true,
        trim:true
    },
    avatar: {
        String: true, //cloudinary url
        required:true,
    },
    coverImage: {
        type:  String, // cloudinary url
        
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    refereshTocken: {
        type: String,
    }
    
},{Timestamp:true})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
//   it return the new generated token
  userSchema.methods.generateAccessToken = function (password) {
   return jwt.sign(
        {    // payloads
            _id: this._id,
            email: this.email,
            username: this.userName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiryIN: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};

// it only refresh the token  onthat id . It not need to return more detail
userSchema.methods.generateRefreshToken = function (password) {
 return jwt.sign(
      {    // payloads
          _id: this._id,
          
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiryIN: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
};

export const User=mongoose.model("User", userSchema);