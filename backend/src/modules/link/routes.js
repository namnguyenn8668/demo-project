import { Router } from 'express';
import authMiddleware from '../../middlewares/auth-handler';
import * as controller from './controller';
import config from '../../app.config';

const router = Router();

router.get('/list', controller.getAllLink);
router.post('/create', controller.create);
router.put('/:_id', controller.update);
router.post('/createBank', controller.createBank);
router.put('/updateBank/:_id', controller.updateBank);
router.get('/bank', controller.getBanks);

export default router;
