import mongoose from 'mongoose'
import Vaccine from '../models/Vaccine'


export default class VaccineController {
    static async getVaccine(req, res) {
        try {
            const vacs = await Vaccine.find().exec();
            res.status(200).json(vacs);
        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }

    static async getVacById(req, res) {
        try {
            const vac = await Vaccine.findOne({ _id: req.params.vacId }).exec();

            if (!vac) return res.status(404).json({ 'message': "Vac not found" });

            return res.status(200).json(vac);
        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }

    static async createVac(req, res) {
        try {
            const { name, description, qty } = req.body;

            const newVac = {
                name,
                description,
                qty
            };

            const vacCreated = await Vaccine.create(newVac);

            return res.status(201).json(vacCreated);
        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }

    static async updateVac(req, res) {
        try {
            let vac = await Vaccine.findOne({ _id: req.params.vacId }).exec();

            if (!vac) return res.status(404).json({ 'message': "Vaccine not found" });

            if (req.body?.name) vac.name = req.body.name;
            if (req.body?.description) vac.description = req.body.description;
            if (req.body?.qty) vac.qty = req.body.qty;

            const changedVac = await vac.save();

            return res.status(200).json(changedVac);
        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }

    static async deleteVac(req, res) {
        try {
            let vac = await Vaccine.findOne({ _id: req.params.vacId }).exec();

            if (!vac) return res.status(404).json({ 'message': "Vac not found" });

            await Vaccine.deleteOne(vac);

            return res.status(200).json({ "message": "Vac deleted" });
        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }
}
