import mongoose from "mongoose";

export async function connectionDB(URI) {
    try {
        await mongoose.connect(URI)
        console.log("Successful connection with the DB...")
    } catch (error) {
        console.log({ error })
    }
}