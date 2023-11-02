import express from 'express'
import UserController from '../../controllers/UserController.js'

const router = express.Router()

router.get('/', UserController.getUsers)
router.get('/:userId', UserController.getUserById)
router.post('/create', UserController.createUser)
router.put('/edit/:userId', UserController.updateUser)
router.delete('/delete/:userId', UserController.deleteUser)

export default router