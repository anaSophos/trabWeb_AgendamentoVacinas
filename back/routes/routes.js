import express from 'express'
import userRoutes from './routePaths/userRoutes.js'
import hospitalRoutes from './routePaths/hospitalRoutes.js'

const router = express.Router()

router.use('/user', userRoutes)
router.use('/hosp', hospitalRoutes)

export default router