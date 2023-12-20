import mongoose from 'mongoose'
import Vaccine from '../models/Vaccine.js'
import Hospital from '../models/Hospital.js'


export default class VaccineController {
    static async getVaccine(req, res) {
        try {
            const vacs = await Vaccine.find().exec()
            res.status(200).json(vacs)
        } catch (e) {
            res.status(500).json({ 'message': e.message })
        }
    }

    static async getVacById(req, res) {
        try {
            const vac = await Vaccine.findOne({ _id: req.params.vacId }).exec()

            if (!vac) return res.status(404).json({ 'message': "Vac not found" })

            return res.status(200).json(vac)
        } catch (e) {
            res.status(500).json({ 'message': e.message })
        }
    }

    static async createVac(req, res) {
        try {
            const { name, description, qty, provider } = req.body 
            
            if (!name || !description || !qty || !provider) {
                return res.status(400).json({ 'message': "Id" })
            }

            const existingVac = await Vaccine.findOne({ name: req.body.name }).exec();

            if (existingVac) {
                return res.status(400).json({ 'message': 'Vacine with this name already exists for the provider.' });
            } else{
            const newVac = {
                name,
                description,
                qty,
                provider
            }

            const vacCreated = await Vaccine.create(newVac)

            await Hospital.findByIdAndUpdate(provider, { $push: { vaccines: vacCreated._id } })

            return res.status(201).json(vacCreated)
        }
        } catch (e) {
            res.status(500).json({ 'message': e.message })
        }
    }

    static async updateVac(req, res) {
        try {
            let vac = await Vaccine.findOne({ _id: req.params.vacId }).exec()

            if (!vac) return res.status(404).json({ 'message': "Vaccine not found" })

            if (req.body?.name) vac.name = req.body.name;
            if (req.body?.description) vac.description = req.body.description;
            if (req.body?.qty) vac.qty = req.body.qty;
            if (req.body?.provider) vac.provider = req.body.provider;

            const changedVac = await vac.save()

            return res.status(200).json(changedVac)
        } catch (e) {
            res.status(500).json({ 'message': e.message })
        }
    }

    static async deleteVac(req, res) {
        try {
            let vac = await Vaccine.findOne({ _id: req.params.vacId }).exec()

            if (!vac) return res.status(404).json({ 'message': "Vac not found" })

            await Vaccine.deleteOne(vac)

            return res.status(200).json({ "message": "Vac deleted" })
        } catch (e) {
            res.status(500).json({ 'message': e.message })
        }
    }
}
