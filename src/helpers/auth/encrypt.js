import bcrypt from "bcrypt";
import { salt_bcrypt } from "../../config/enviroments.js";

export async function compare(password, pass_encrypt) {
    try {
        const comparePass = await bcrypt.compare(password, pass_encrypt)
        return comparePass
    } catch (error) {
        console.log({ error })
    }
}

export async function encrypt(password) {
    try {
        const hashPass = await bcrypt.hash(password, JSON.parse(salt_bcrypt));
        return hashPass
    } catch (error) {
        console.log({ error });
    }
}