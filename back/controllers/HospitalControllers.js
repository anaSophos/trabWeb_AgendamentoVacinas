import mongoose from 'mongoose'
import Hospital from '../models/Hospital.js'
import Operator from '../models/Operator.js'

export default class HospitalController{

    static async getHospital(req, res){
        try{
            const hosps = await Hospital.find().exec()
        
            res.status(200).json(hosps)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async getHospById(req,res){
        try{
            const hosp = await Hospital.findOne({_id : req.params.hospId}).exec()

            if(!hosp) return res.status(404).json({'message': "Hosp not found"})

            return res.status(200).json(hosp);
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async createHosp(req, res) {
        try {
          const { name, address, operators } = req.body;
    
          if (!name || !address) {
            return res.status(400).json({ 'message': 'Name and address.' });
          }
    
          const newHosp = {
            name,
            address,
            operators: operators || [], 
          };
    
          const hospCreated = await Hospital.create(newHosp);
    
          if (operators && operators.length > 0) {
            for (const operatorId of operators) {
              await Operator.findByIdAndUpdate(operatorId, { $push: { hospitals: hospCreated._id } });
            }
          }
    
          return res.status(201).json(hospCreated);
        } catch (e) {
          res.status(500).json({ 'message': e.message });
        }
      }

    static async updateHosp(req, res){
        try{
            let hosp = await Hospital.findOne({_id : req.params.hospId}).exec()

            if(!hosp) return res.status(404).json({'message': "Hosp not found"})

            if(req.body?.name) hosp.name = req.body.name
            if(req.body?.address) hosp.address = req.body.address

            const changedHosp = await hosp.save()

            return res.status(200).json(changedHosp)

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async deleteHosp(req, res){
        try{
            let hosp = await Hospital.findOne({_id : req.params.hospId}).exec()

            if(!hosp) return res.status(404).json({'message': "Hosp not found"})

            await Hospital.deleteOne(hosp)

            return res.status(200).json({"message": "Hosp deleted"})

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

}
