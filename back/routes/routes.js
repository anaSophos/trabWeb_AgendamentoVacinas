import express from 'express'
import userRoutes from './routePaths/userRoutes.js'
import hospitalRoutes from './routePaths/hospitalRoutes.js'
import vaccineRoutes from './routePaths/vaccineRoutes.js'
import schedulingRoutes from './routePaths/schedulingRoutes.js'
import operatorRoutes from './routePaths/operatorRoutes.js'

const router = express.Router()

router.use('/user', userRoutes)
router.use('/hosp', hospitalRoutes)
router.use('/vac', vaccineRoutes)
router.use('/scheduling', schedulingRoutes)
router.use('/operator', operatorRoutes)

export default router
