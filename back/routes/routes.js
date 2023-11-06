import express from 'express'
import userRoutes from './routePaths/userRoutes.js'
import hospitalRoutes from './routePaths/hospitalRoutes.js'
import vaccineRoutes from './routePaths/vaccineRoutes.js'
import schedulingRoutes from './routePaths/schedulingRoutes.js'
import operatorRoutes from './routePaths/operatorRoutes.js'
import authRoutes from './routePaths/authRoutes.js'
import roleRoutes from './routePaths/roleRoutes.js'
import permissioRoutes from './routePaths/permissionRoutes.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/user', userRoutes)
router.use('/hosp', hospitalRoutes)
router.use('/vac', vaccineRoutes)
router.use('/scheduling', schedulingRoutes)
router.use('/operator', operatorRoutes)
router.use('/auth', authRoutes)
router.use('/role', roleRoutes)
router.use('/permission', permissioRoutes)

export default router
