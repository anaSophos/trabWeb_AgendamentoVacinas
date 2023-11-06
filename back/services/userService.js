const uuid = require('uuid'); 
const User = require('../models/User');
const Vaccine = require('../models/Vaccine');
const Scheduling = require('../models/Scheduling');

class UserService {
  static async createUser(dto) {
    const user = await User.findOne({ email: dto.email });
    if (user) {
      throw new Error('Usuário já cadastrado');
    }

    return User.create(dto);
  }

  static async getUsers() {
    return User.find();
  }

  static async getUserById(id) {
    return User.findById(id);
  }

  static async updateUser(id, updatedFields) {
    return User.findByIdAndUpdate(id, updatedFields, { new: true });
  }

  static async deleteUser(id) {
    return User.findByIdAndDelete(id);
  }
}

class CommonUserService extends UserService {
  static async schedule(userId, vaccineId, date, time) {
    const vaccine = await Vaccine.findById(vaccineId);

    if (!vaccine) {
      throw new Error('Vacina não encontrada');
    }

    if (vaccine.qty === 0) {
      throw new Error('Vacina esgotada');
    }

    const scheduling = await Scheduling.create({
      schedulingId: uuid.v4(), 
      userId,
      vaccineId,
      date,
      time,
    });

    vaccine.qty -= 1;
    await vaccine.save();

    return scheduling;
  }

  static async cancelScheduling(schedulingId) {
    const scheduling = await Scheduling.findById(schedulingId);

    if (!scheduling) {
      throw new Error('Agendamento não encontrado');
    }

    const vaccine = await Vaccine.findById(scheduling.vaccineId);
    vaccine.qty += 1;
    await vaccine.save();

    await Scheduling.findByIdAndDelete(schedulingId);

    return 'Compromisso cancelado com sucesso';
  }
}

class AdminUserService extends UserService {
  static async addVaccine(dto) {
    return Vaccine.create(dto);
  }

  static async updateVaccine(vaccineId, updatedFields) {
    return Vaccine.findByIdAndUpdate(vaccineId, updatedFields, { new: true });
  }

  static async deleteVaccine(vaccineId) {
    await Vaccine.findByIdAndDelete(vaccineId);
    return 'Vacina excluída com sucesso';
  }

  static async getAvailableVaccines() {
    return Vaccine.find({ qty: { $gt: 0 } });
  }
}

module.exports = { CommonUserService, AdminUserService };
