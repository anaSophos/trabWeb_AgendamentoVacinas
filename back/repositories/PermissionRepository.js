import Permission from '../models/Permission.js';

export default class PermissionRepository {
  static async getAllPermissions() {
    return Permission.find().exec();
  }

  static async getPermissionById(permissionId) {
    return Permission.findOne({ _id: permissionId }).exec();
  }

  static async getPermissionByName(nome) {
    return Permission.findOne({ nome }).exec();
  }

  static async createPermission(permissionData) {
    return Permission.create(permissionData);
  }

  static async updatePermission(permissionId, updatedData) {
    let permission = await Permission.findOne({ _id: permissionId }).exec();
    if (!permission) return null;

    if (updatedData.nome) {
      const existingPermission = await Permission.findOne({ nome: updatedData.nome }).exec();
      if (existingPermission) throw new Error('Permission already exists');
      permission.nome = updatedData.nome;
    }

    if (updatedData.descricao) permission.descricao = updatedData.descricao;

    return permission.save();
  }

  static async deletePermission(permissionId) {
    const permission = await Permission.findOne({ _id: permissionId }).exec();
    if (!permission) return false;

    await Permission.deleteOne(permission);
    return true;
  }
}