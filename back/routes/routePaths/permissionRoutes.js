import express from 'express'
import PermissionController from '../../controllers/permissionController.js'
import Authenticated from '../../middleware/authenticated.js'

const router = express.Router()
//router.use(Authenticated.checkToken)

router.get('/', PermissionController.getPermissions)
router.get('/:permissionId', PermissionController.getPermissionById)
router.post('/create', PermissionController.createPermission)
router.put('/edit/:permissionId', PermissionController.updatePermission)
router.delete('/delete/:permissionId', PermissionController.deletePermission)

export default router