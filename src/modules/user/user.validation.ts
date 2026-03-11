import { z } from 'zod';

export const createParticipantSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().min(5),
});
