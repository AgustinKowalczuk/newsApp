import UserModel from "../../models/user.model.js"
export async function user_founded(email) {
    //email ==> emaildb? false : true
    const found = await UserModel.find({ email: email })
    // console.log({ found })
    if (found.length) return true
    return false
}

export async function validation_User(
    name,
    nick,
    password,
    email,
    country,
    interests
) {
    let new_user_validated = false
    if (!!(name.trim() && nick.trim() && password.trim() && email.trim() && country.trim() && interests)) {
        const user_exist = await user_founded(email)
        // console.log({ user_ex Fist })
        new_user_validated = !user_exist
        return new_user_validated
    }
    return new_user_validated
}