import Scheduling from '../models/Scheduling.js';
import Vaccine from '../models/Vaccine.js';

export default class SchedulingService {

  static async createScheduling(dto) {
    const { idUser, idVac, data, time } = dto;

    try {
      // Verifique a disponibilidade da vacina
      const vaccine = await Vaccine.findById(idVac);
      if (!vaccine) {
        throw new Error('Vacina não encontrada. Certifique-se de que a vacina exista antes de agendar.');
      }

      // Se a quantidade de vacina em estoque for igual a 0 (zero), não permita agendar
      if (vaccine.qty === 0) {
        throw new Error('A vacina está esgotada e não pode ser agendada.');
      }

      const newScheduling = {
        idUser,
        idVac,
        data,
        time,
      };

      const schedulingCreated = await Scheduling.create(newScheduling);

      // Atualize a quantidade da vacina disponível
      vaccine.qty -= 1;
      await vaccine.save();

      return schedulingCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getSchedules() {
    return Scheduling.find();
  }

  static async getScheduleById(id) {
    return Scheduling.findById(id);
  }

  static async deleteSchedule(id) {
    const scheduling = await Scheduling.findById(id);
    if (!scheduling) {
      throw new Error('Agendamento não encontrado.');
    }

    // Recupere a quantidade da vacina associada ao agendamento
    const vaccine = await Vaccine.findById(scheduling.idVac);
    if (vaccine) {
      vaccine.qty += 1;
      await vaccine.save();
    }

    await Scheduling.findByIdAndDelete(id);

    return 'Agendamento cancelado com sucesso';
  }
}

export { SchedulingService };
