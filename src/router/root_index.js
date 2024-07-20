import { Router } from "express"
import { user_router } from "./users/user_router.js"

export const router_index = Router()

router_index.use('/user', user_router)