import OperatorService from '../services/operadorService.js';

export default class OperatorController {
  static async getOperator(req, res) {
    try {
      const operators = await OperatorService.getAllOperators();
      res.status(200).json(operators);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getOperatorById(req, res) {
    try {
      const operator = await OperatorService.getOperatorById(req.params.operId);

      if (!operator) return res.status(404).json({ message: 'Operator not found' });

      return res.status(302).json(operator);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async createOperator(req, res) {
    try {
      const { name, email, password, hospital } = req.body;

      if (!name || !email || !password || !hospital) {
        return res.status(400).json({ message: 'Id' });
      }

      const newOperator = {
        name,
        email,
        password,
        hospital,
      };

      const operatorCreated = await OperatorService.createOperator(newOperator);

      return res.status(201).json(operatorCreated);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async updateOperator(req, res) {
    try {
      const changedOperator = await OperatorService.updateOperator(req.params.operatorId, req.body);

      return res.status(200).json(changedOperator);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteOperator(req, res) {
    try {
      const result = await OperatorService.deleteOperator(req.params.operId);

      return res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
