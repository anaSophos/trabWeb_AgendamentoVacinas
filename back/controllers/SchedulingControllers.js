import mongoose from 'mongoose'
import Scheduling from '../models/Scheduling.js'
import Vaccine from '../models/Vaccine.js'
import User from '../models/User.js'

export default class SchedulingController{

    static async getScheduling(req, res){
        try{
            const schedules = await Scheduling.find().exec()
        
            res.status(200).json(schedules)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async getSchedulingById(req,res){
        try{
            const schedule = await Scheduling.findOne({_id : req.params.schedulingId}).exec()

            if(!schedule) return res.status(404).json({'message': "Schedule not found"})

            return res.status(302).json(schedule)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async createScheduling(req,res){
        try{
            const {idUser, idVac, data, time} = req.body

            const newSchedule = {
                idUser,
                idVac,
                data,
                time 
            }

            const scheduleCreated = await Scheduling.create(newSchedule)

            await Vaccine.findByIdAndUpdate(idVac, { $push: { schedules: scheduleCreated._id } })
            await User.findByIdAndUpdate(idUser, { $push: { schedules: scheduleCreated._id } })

            return res.status(201).json(scheduleCreated)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async updateScheduling(req, res){
        try {
            let schedule = await Scheduling.findOne({ _id: req.params.schedulingId }).exec()

            if (!schedule) return res.status(404).json({ 'message': "Schedule not found" })

            if (req.body?.idUser) schedule.idUser = req.body.idUser;
            if (req.body?.idVac) schedule.idVac = req.body.idVac;
            if (req.body?.data) schedule.data = req.body.data;
            if (req.body?.time) schedule.time = req.body.time;

            const scheduleUpdat = await schedule.save()

            return res.status(200).json(scheduleUpdat)
        } catch (e) {
            res.status(500).json({ 'message': e.message })
        }
    }


    static async deleteScheduling(req, res){
        try{
            let schedule = await Scheduling.findOne({_id : req.params.schedulingId}).exec()

            if(!schedule) return res.status(404).json({'message': "Schedule not found"})

            await Scheduling.deleteOne(schedule)

            return res.status(200).json({"message": "Schedule deleted"})

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

}