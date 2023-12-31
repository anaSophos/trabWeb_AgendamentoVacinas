import express from 'express'
import UserController from '../../controllers/UserController.js'
import Authenticated from '../../middleware/authenticated.js'

const router = express.Router()

//router.use(Authenticated.checkToken)

router.get('/', UserController.getUsers)
router.get('/:userId', UserController.getUserById)
router.get('/:email', UserController.getUserByEmail)
router.post('/create', UserController.createUser)
router.put('/edit/:userId', UserController.updateUser)
router.delete('/delete/:userId', UserController.deleteUser)

export default router