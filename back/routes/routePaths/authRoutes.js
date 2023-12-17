import express from 'express'
import AuthController from '../../controllers/AuthController.js'

const router = express.Router()
router.post('/login', AuthController.loginUser)
router.post('/refresh', AuthController.refreshToken)

export default router