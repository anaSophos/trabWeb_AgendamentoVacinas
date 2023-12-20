import express from 'express'
import SchedulingController from '../../controllers/SchedulingControllers.js'
import Authenticated from '../../middleware/authenticated.js'

const router = express.Router()

router.use(Authenticated.checkToken)

router.get('/', SchedulingController.getScheduling)
router.get('/:schedulingId', SchedulingController.getSchedulingById)
router.post('/create', SchedulingController.createScheduling)
router.put('/edit/:schedulingId', SchedulingController.updateScheduling)
router.delete('/delete/:schedulingId', SchedulingController.deleteScheduling)
router.get('/user/:idUser', SchedulingController.getSchedulingByUserId)

export default router
