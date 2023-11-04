import express from 'express'
import userRoutes from './routePaths/userRoutes.js'
import hospitalRoutes from './routePaths/hospitalRoutes.js'
import vaccineRoutes from './routePaths/vaccineRoutes.js'

const router = express.Router()

router.use('/user', userRoutes)
router.use('/hosp', hospitalRoutes)
router.use('/user', vaccineRoutes)

export default router
