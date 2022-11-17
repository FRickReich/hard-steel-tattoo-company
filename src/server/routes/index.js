import { Router } from 'express';

import health from '../controllers/health';
import frontend from './../controllers/frontend';
import logging from './../controllers/logging';

const router = Router();

router.route('/*').get(frontend.getFrontend);
router.route('/health').get(health.getHealth);
router.route('./log').post(logging.postLogging);

export default router;
