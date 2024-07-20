import { Router } from "express"

export const user_router = Router()

/*
 * -Crear
 * -Borrar
 * -Buscar
 * |--user--> all?limites
 * |--user--> byId
 * |--user--> email
 * -Actualizar
 * |--user--> info_general
 * |--user--> name
 * |--user--> email
 * |--user--> password
 */
user_router.use("/create", (req, res) => {
    res.send({ msg: "This route is for create", status: 200 })
})
user_router.use("/delete", (req, res) => {
    res.send({ msg: "This route is for delete", status: 200 })
})
user_router.use("/search", (req, res) => {
    res.send({ msg: "This route is for search", status: 200 })
})
user_router.use("/update", (req, res) => {
    res.send({ msg: "This route is for update", status: 200 })
})

user_router.get("/*", (req, res) => {
    res.send({ status: 404, msg: "Route not found" })
})