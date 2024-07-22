import mongoose from "mongoose";

/**
 * Usuario:
 * ===>name     (*)
 * ===>nick
 * ===>pass     (*)
 * ===>email    (*)
 * ===>country  
 * ===>interests    
*/

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    nick: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        index: true
    },
    country: {
        type: String,
        require: true
    },
    interests: [
        {
            type: String,
            require: true
        }
    ]
})

export default mongoose.model("User", userSchema)