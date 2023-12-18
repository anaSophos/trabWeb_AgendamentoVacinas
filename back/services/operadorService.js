import bcrypt from 'bcrypt';
import OperatorRepository from '../repositories/OperatorRepository.js';
import Hospital from '../models/Hospital.js';

export default class OperatorService {
  static async getAllOperators() {
    return OperatorRepository.getAllOperators();
  }

  static async getOperatorById(operId) {
    return OperatorRepository.getOperatorById(operId);
  }

  static async createOperator(operatorData) {
    const { name, email, password, hospital } = operatorData;

    const existingOperator = await OperatorRepository.getOperatorByEmail(email);
    if(existingOperator){
      throw new Error('Operator already exists');
    }
    const salt = bcrypt.genSaltSync();
    const hashedPassword = await bcrypt.hash(password, salt);

    operatorData.password = hashedPassword;
    const operatorCreated = await OperatorRepository.createOperator(operatorData);

    await Hospital.findByIdAndUpdate(hospital, { $push: { operators: operatorCreated._id } });

    return operatorCreated;
  }

  static async updateOperator(operatorId, updateData) {
    let operator = await OperatorRepository.getOperatorById(operatorId);

    if (!operator) {
      throw new Error('Operator not found');
    }

    if (updateData.name) operator.name = updateData.name;
    if (updateData.email) operator.email = updateData.email;

    return OperatorRepository.updateOperator(operator);
  }

  static async deleteOperator(operId) {
    let operator = await OperatorRepository.getOperatorById(operId);

    if (!operator) {
      throw new Error('Operator not found');
    }

    await OperatorRepository.deleteOperator(operator);

    return { message: 'Operator deleted' };
  }
}