import express from 'express';
import VaccineController from '../../controllers/VaccineController.js';
import Authenticated from '../../middleware/authenticated.js'

const router = express.Router();

//router.use(Authenticated.checkToken)

router.get('/', VaccineController.getVaccine);
router.get('/:vacId', VaccineController.getVacById);
router.post('/create', VaccineController.createVac);
router.put('/edit/:vacId', VaccineController.updateVac);
router.delete('/delete/:vacId', VaccineController.deleteVac);

export default router;
