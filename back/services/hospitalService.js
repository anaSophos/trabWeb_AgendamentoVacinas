import Hospital from '../models/Hospital.js';
import Operator from '../models/Operator.js';

export default class HospitalService {

  static async createHospital(dto) {
    const { name, address, operators } = dto;

    try {
      if (!name || !address) {
        throw new Error('Campos obrigatórios não fornecidos.');
      }

      const newHospital = {
        name,
        address,
        operators: operators || [],
      };

      const hospitalCreated = await Hospital.create(newHospital);

      if (operators && operators.length > 0) {
        for (const operatorId of operators) {
          await Operator.findByIdAndUpdate(operatorId, { $push: { hospitals: hospitalCreated._id } });
        }
      }

      return hospitalCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getHospitals() {
    return Hospital.find();
  }

  static async getHospitalById(id) {
    return Hospital.findById(id);
  }

  static async updateHospital(id, updatedFields) {
    return Hospital.findByIdAndUpdate(id, updatedFields, { new: true });
  }

  static async deleteHospital(id) {
    return Hospital.findByIdAndDelete(id);
  }
}

export { HospitalService };
