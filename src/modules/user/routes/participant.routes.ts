import { Router } from 'express';
import { createUser, getUser } from '../controllers/participant.controller';
import { validate } from '../../../middlewares/validate';
import { createParticipantSchema } from '../user.validation';

const router = Router();

router.post('/create', validate(createParticipantSchema),createUser);
router.get('/:id', getUser);

export default router;
