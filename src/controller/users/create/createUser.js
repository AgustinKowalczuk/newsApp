import { validation_User } from "../../../helpers/validation/user_validation.js";
import { compare, encrypt } from "../../../helpers/auth/encrypt.js";
import userModel from "../../../models/user.model.js";

export default async function createUser(req, res) {
    try {
        const { name, nick, password, email, country, interests } = req.body;

        // Validación de datos del usuario
        const isValid = await validation_User(name, nick, password, email, country, interests);

        if (!isValid) {
            return res.status(400).json({ msg: "Datos de usuario no válidos" });
        }

        // Hash de la contraseña
        const hashPassword = await encrypt(password);

        // Creación del nuevo usuario
        const newUser = new userModel({
            name,
            nick,
            password: hashPassword,
            email,
            country,
            interests
        });

        await newUser.save();

        // Respuesta de éxito
        return res.status(201).json({
            msg: "Usuario creado con éxito",
            user: {
                id: newUser._id,
                name: newUser.name,
                nick: newUser.nick,
                email: newUser.email,
                country: newUser.country,
                interests: newUser.interests
            }
        });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        return res.status(500).json({ msg: "Error interno del servidor" });
    }
}
