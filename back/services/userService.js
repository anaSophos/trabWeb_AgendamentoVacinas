//const uuid = require('uuid'); 
//const User = require('../models/User');
//const Vaccine = require('../models/Vaccine');
//const Scheduling = require('../models/Scheduling');

import UserRepository from '../repositories/UserRepository.js';

export default class UserService {
  static async getAllUsers() {
    return UserRepository.getAllUsers();
  }

  static async getUserById(userId) {
    return UserRepository.getUserById(userId);
  }

  static async getUserByEmail(email) {
    return UserRepository.getUserByEmail(email);
  }

  static async createUser(userData) {
    const { name, email, password, rg, cpf, phoneNum, birth } = userData;

    const existingUser = await UserRepository.getUserByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    return UserRepository.createUser({ name, email, password, rg, cpf, phoneNum, birth });
  }

  static async updateUser(userId, updatedData) {
    return UserRepository.updateUser(userId, updatedData);
  }

  static async deleteUser(userId) {
    return UserRepository.deleteUser(userId);
  }
}
/*
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

module.exports = { CommonUserService, AdminUserService };*/
