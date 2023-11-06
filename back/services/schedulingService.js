const uuid = require('uuid');
const Scheduling = require('../models/Scheduling');
const Vaccine = require('../models/Vaccine');

class SchedulingService {
  static async getSchedules() {
    return Scheduling.find();
  }

  static async getScheduleById(id) {
    return Scheduling.findById(id);
  }

  static async createScheduling(dto) {
    const { idUser, idVac, data, time } = dto;

    try {
      const vaccine = await Vaccine.findById(idVac);
      if (!vaccine) {
        throw new Error('Vacina não encontrada.');
      }

      if (vaccine.qty === 0) {
        throw new Error('A vacina está esgotada e não pode ser agendada.');
      }

      const schedulingId = uuid.v4();

      const newScheduling = new Scheduling({
        _id: schedulingId,
        idUser,
        idVac,
        data,
        time,
      });

      const schedulingCreated = await newScheduling.save();

      vaccine.qty -= 1;
      await vaccine.save();

      return schedulingCreated;
    } catch (error) {
      throw error;
    }
  }

  static async updateScheduling(id, updatedFields) {
    return Scheduling.findByIdAndUpdate(id, updatedFields, { new: true });
  }

  static async deleteScheduling(id) {
    const scheduling = await Scheduling.findById(id);
    if (!scheduling) {
      throw new Error('Agendamento não encontrado.');
    }

    const vaccine = await Vaccine.findById(scheduling.idVac);
    if (vaccine) {
      vaccine.qty += 1;
      await vaccine.save();
    }

    await Scheduling.findByIdAndDelete(id);

    return 'Agendamento cancelado com sucesso';
  }
}

module.exports = SchedulingService;
