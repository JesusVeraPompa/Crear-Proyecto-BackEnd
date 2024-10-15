import { Router } from 'express'
import routerUsers from "./users.js";

const routerIndex = Router()

routerIndex.use('/users',routerUsers)

export default routerIndex;