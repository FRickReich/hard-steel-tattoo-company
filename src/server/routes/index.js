import { Router } from 'express';

import health from '../controllers/health';
import frontend from './../controllers/frontend';
import logging from './../controllers/logging';
import auth from './../controllers/auth';

const router = Router();

router.route('/health').get(health.getHealth);
router.route('/log').post(logging.postLogging);
router.route('/auth/login').post(auth.login);
router.route('/*').get(frontend.getFrontend);

export default router;
