import { Router } from 'express'
import {allUsers,usersByRole,usersByID}  from '../controllers/users/read.js'

const routerUsers = Router()

routerUsers.get('/all', allUsers)
routerUsers.get('/role/:x', usersByRole)
routerUsers.get('/id/:idValue', usersByID)


export default routerUsers
