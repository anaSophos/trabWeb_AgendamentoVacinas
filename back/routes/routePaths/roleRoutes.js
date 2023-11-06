import express from 'express'
import RoleController from '../../controllers/RoleController.js'
import Authenticated from '../../middleware/authenticated.js'

const router = express.Router()

router.use(Authenticated.checkToken)

router.get('/', RoleController.getRoles)
router.get('/:roleId', RoleController.getRoleById)
router.post('/create', RoleController.createRole)
router.put('/edit/:roleId', RoleController.updateRole)
router.delete('/delete/:roleId', RoleController.deleteRole)

export default router