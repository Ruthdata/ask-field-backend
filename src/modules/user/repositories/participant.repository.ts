import { ParticipantModel } from '../models/participant.model';

export class ParticipantRepository {
  create(data: any) {
    return ParticipantModel.create(data);
  }

  findByEmail(email: string) {
    return ParticipantModel.findOne({ email });
  }

  findById(id: string) {
    return ParticipantModel.findById(id);
  }
}
