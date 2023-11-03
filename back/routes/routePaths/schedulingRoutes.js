import express from 'express'
import SchedulingController from '../../controllers/SchedulingControllers.js'

const router = express.Router()

router.get('/', SchedulingController.getScheduling)
router.get('/:schedulingId', SchedulingController.getSchedulingById)
router.post('/create', SchedulingController.createScheduling)
router.put('/edit/:schedulingId', SchedulingController.updateScheduling)
router.delete('/delete/:schedulingId', SchedulingController.deleteScheduling)

export default router