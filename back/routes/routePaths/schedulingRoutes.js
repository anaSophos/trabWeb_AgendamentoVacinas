/*import express from 'express';
import SchedulingController from '../../controllers/SchedulingControllers.js';
import Authenticated from '../../middleware/authenticated.js';

const router = express.Router();

router.use(Authenticated.checkToken);

router.get('/', (req, res) => {
    if (req.userType === 'user') {
        SchedulingController.getScheduling(req, res);
    } else {
        res.status(403).json({ 'message': "Forbidden" });
    }
});

router.get('/:schedulingId', (req, res) => {
    if (req.userType === 'user') {
        SchedulingController.getSchedulingById(req, res);
    } else {
        res.status(403).json({ 'message': "Forbidden" });
    }
});

router.post('/create', (req, res) => {
    if (req.userType === 'operator') {
        SchedulingController.createScheduling(req, res);
    } else {
        res.status(403).json({ 'message': "Forbidden" });
    }
});

router.put('/edit/:schedulingId', (req, res) => {
    if (req.userType === 'operator') {
        SchedulingController.updateScheduling(req, res);
    } else {
        res.status(403).json({ 'message': "Forbidden" });
    }
});

router.delete('/delete/:schedulingId', (req, res) => {
    if (req.userType === 'operator') {
        SchedulingController.deleteScheduling(req, res);
    } else {
        res.status(403).json({ 'message': "Forbidden" });
    }
});

export default router;*/
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