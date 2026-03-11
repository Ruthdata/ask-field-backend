import { Router } from 'express';
import participantRoutes from '../modules/user/routes/participant.routes';
import researcherRoutes from '../modules/user/routes/researcher.routes';

const router = Router();

router.use('/participants', participantRoutes);
router.use('/researchers', researcherRoutes);

export default router;
