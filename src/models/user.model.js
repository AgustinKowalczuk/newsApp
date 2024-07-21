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
        // require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
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