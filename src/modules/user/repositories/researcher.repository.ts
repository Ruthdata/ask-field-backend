import { ResearcherModel } from '../models/researcher.model';

export class ResearcherRepository {
  create(data: any) {
    return ResearcherModel.create(data);
  }

  findByEmail(email: string) {
    return ResearcherModel.findOne({ email });
  }

  findById(id: string) {
    return ResearcherModel.findById(id);
  }
}
