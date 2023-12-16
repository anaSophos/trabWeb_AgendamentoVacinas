import express from 'express'
import OperatorController from '../../controllers/OperatorController.js'
import Authenticated from '../../middleware/authenticated.js'

const router = express.Router()

//router.use(Authenticated.checkToken)

router.get('/', OperatorController.getOperator)
router.get('/:operId', OperatorController.getOperatorById)
router.post('/create', OperatorController.createOperator)
router.put('/edit/:operId', OperatorController.updateOperator)
router.delete('/delete/:operId', OperatorController.deleteOperator)

export default router