import { Router } from "express"
import { user_router } from "./users/user_router.js"
import { news_router } from "./news/news_router.js"

export const router_index = Router()

router_index.use('/user', user_router)
router_index.use('/news', news_router)