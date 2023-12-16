import express from 'express'
import HospitalController from '../../controllers/HospitalControllers.js'
import Authenticated from '../../middleware/authenticated.js'

const router = express.Router()

//router.use(Authenticated.checkToken)

router.get('/', HospitalController.getHospital)
router.get('/:hospId', HospitalController.getHospById)
router.post('/create', HospitalController.createHosp)
router.put('/edit/:hospId', HospitalController.updateHosp)
router.delete('/delete/:hospId', HospitalController.deleteHosp)

export default router