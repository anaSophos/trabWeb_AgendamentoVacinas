import Operator from '../models/Operator.js';

export default class OperatorRepository {
  static async getAllOperators() {
    return Operator.find().exec();
  }

  static async getOperatorById(operId) {
    return Operator.findOne({ _id: operId }).exec();
  }

  static async getOperatorByEmail(email) {
    return Operator.findOne({ email }).exec();
  }

  static async createOperator(operatorData) {
    return Operator.create(operatorData);
  }

  static async updateOperator(operator) {
    return operator.save();
  }

  static async deleteOperator(operator) {
    return Operator.deleteOne(operator);
  }
}