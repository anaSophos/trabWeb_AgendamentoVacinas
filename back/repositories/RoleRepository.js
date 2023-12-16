import Role from '../models/Role.js';

export default class RoleRepository {
  static async getAllRoles() {
    return Role.find().exec();
  }

  static async getRoleById(roleId) {
    return Role.findOne({ _id: roleId }).exec();
  }

  static async getRoleByName(nome) {
    return Role.findOne({ nome }).exec();
  }

  static async createRole(roleData) {
    return Role.create(roleData);
  }

  static async updateRole(roleId, updatedData) {
    let role = await Role.findOne({ _id: roleId }).exec();
    if (!role) return null;

    if (updatedData.nome) {
      const existingRole = await Role.findOne({ nome: updatedData.nome }).exec();
      if (existingRole) throw new Error('Role already exists');
      role.nome = updatedData.nome;
    }

    if (updatedData.descricao) role.descricao = updatedData.descricao;

    return role.save();
  }

  static async deleteRole(roleId) {
    const role = await Role.findOne({ _id: roleId }).exec();
    if (!role) return false;

    await Role.deleteOne(role);
    return true;
  }
}