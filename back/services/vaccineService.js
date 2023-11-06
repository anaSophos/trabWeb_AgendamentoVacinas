import Vaccine from '../models/Vaccine';
import Hospital from '../models/Hospital';

class VaccineService {
  static async createVaccine(dto) {
    // Certifique-se de criar a vacina e atualizar a lista de vacinas no hospital relacionado
    const vaccine = await Vaccine.create(dto);
    await Hospital.findByIdAndUpdate(dto.provider, { $push: { vaccines: vaccine._id } });

    return vaccine;
  }

  static async getAvailableVaccines() {
    // Retorna apenas vacinas com qty maior que 0
    return Vaccine.find({ qty: { $gt: 0 } });
  }

  static async getVaccineById(id) {
    return Vaccine.findById(id);
  }

  static async updateVaccine(id, updatedFields) {
    return Vaccine.findByIdAndUpdate(id, updatedFields, { new: true });
  }

  static async deleteVaccine(id) {
    const vaccine = await Vaccine.findById(id);
    // Antes de excluir a vacina, atualiza a lista de vacinas no hospital relacionado
    await Hospital.findByIdAndUpdate(vaccine.provider, { $pull: { vaccines: vaccine._id } });

    return Vaccine.findByIdAndDelete(id);
  }
}

export default VaccineService;
