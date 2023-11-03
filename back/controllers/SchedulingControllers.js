import mongoose from 'mongoose'
import Scheduling from '../models/Scheduling.js'

export default class ScredulingController{

    static async getScheduling(req, res){
    //Se a quantidade de vacina em estoque for igual a 0 (zero) não deve aparecer no catálogo de agendamento
        try{
            const schedules = await Scheduling.find().exec()
        
            res.status(200).json(schedules)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async getSchedulingById(req,res){
        try{
            const schedule = await Scheduling.findOne({_id : req.params.scheduleId}).exec()

            if(!schedule) return res.status(404).json({'message': "Schedule not found"})

            return res.status(302).json(schedule)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async createScheduling(req,res){
        //O sistema deve verificar a disponibilidade da vacina no posto de saúde selecionado pelo usuário-paciente.
        try{
            const {idUser, idVac, data, time} = req.body

            const newSchedule = {
                idUser,
                idVac,
                data,
                time 
            }

            const scheduleCreated = await Scheduling.create(newSchedule)

            return res.status(201).json(scheduleCreated)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async updateScheduling(req, res){
        
    }


    static async deleteScheduling(req, res){
        try{
            let schedule = await Scheduling.findOne({_id : req.params.scheduleId}).exec()

            if(!schedule) return res.status(404).json({'message': "Schedule not found"})

            await Scheduling.deleteOne(schedule)

            return res.status(200).json({"message": "Schedule deleted"})

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

}