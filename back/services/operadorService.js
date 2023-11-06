import bcrypt from 'bcrypt';
import Operator from '../models/Operator.js';
import Hospital from '../models/Hospital.js';

export default class OperatorService {

  static async createOperator(dto) {
    const { name, email, password, hospital } = dto;

    try {
      // Verifique se o hospital existe
      const existingHospital = await Hospital.findById(hospital);
      if (!existingHospital) {
        throw new Error('Hospital not found.');
      }

      const salt = bcrypt.genSaltSync();
      const hashedPassword = await bcrypt.hash(password, salt);

      if (!name || !email || !password) {
        throw new Error('Campos obrigatórios não fornecidos.');
      }

      const newOperator = {
        name,
        email,
        password: hashedPassword,
        hospital,
      };

      return Operator.create(newOperator);
    } catch (error) {
      throw error;
    }
  }

  static async getOperators() {
    return Operator.find();
  }

  static async getOperatorById(id) {
    return Operator.findById(id);
  }

  static async updateOperator(id, updatedFields) {
    return Operator.findByIdAndUpdate(id, updatedFields, { new: true });
  }

  static async deleteOperator(id) {
    return Operator.findByIdAndDelete(id);
  }
}

export { OperatorService };
