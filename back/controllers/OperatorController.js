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
/*import mongoose from 'mongoose'
import Operator from '../models/Operator.js'
import bcrypt from 'bcrypt'
import Hospital from '../models/Hospital.js'

export default class OperatorController{

    static async getOperator(req, res){
        try{
            const operators = await Operator.find().exec()
        
            res.status(200).json(operators)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async getOperatorById(req,res){
        try{
            const operator = await Operator.findOne({_id : req.params.operId}).exec()

            if(!operator) return res.status(404).json({'message': "Operator not found"})

            return res.status(302).json(operator)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async createOperator(req,res){
        try{
            const {name, email, password, hospital} = req.body

            const salt = bcrypt.genSaltSync()

            const hashedPassword = await bcrypt.hash(password, salt)

            if (!name || !email || !password || !hospital) {
                return res.status(400).json({ 'message': "Id" })
            }            

            const newOperator = {
                name,
                email,
                password: hashedPassword,   
                hospital    
            }

            const operatorCreated = await Operator.create(newOperator)

            await Hospital.findByIdAndUpdate(hospital, { $push: { operators: operatorCreated._id } })

            return res.status(201).json(operatorCreated)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async updateOperator(req, res){
        try{
            let operator = await Operator.findOne({_id : req.params.operatorId}).exec()

            if(!operator) return res.status(404).json({'message': "Operator not found"})

            if(req.body?.name) operator.name = req.body.name
            if(req.body?.email) operator.email = req.body.email

            const changedOperator = await operator.save()

            return res.status(200).json(changedOperator)

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async deleteOperator(req, res){
        try{
            let operator = await Operator.findOne({_id : req.params.operId}).exec()

            if(!operator) return res.status(404).json({'message': "Operator not found"})

            await Operator.deleteOne(operator)

            return res.status(200).json({"message": "Operator deleted"})

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

}*/