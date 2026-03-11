import bcrypt from 'bcrypt';
import { ResearcherRepository } from '../repositories/researcher.repository';

const researcherRepo = new ResearcherRepository();

export class ResearcherService {
  async createUser(data: any) {
    const exists = await researcherRepo.findByEmail(data.email);
    if (exists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return researcherRepo.create({
      ...data,
      password: hashedPassword,
    });
  }

  async getUser(id: string) {
    const user = await researcherRepo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}
