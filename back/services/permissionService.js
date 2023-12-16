import PermissionRepository from '../repositories/PermissionRepository.js';

export default class PermissionService {
  static async getAllPermissions() {
    return PermissionRepository.getAllPermissions();
  }

  static async getPermissionById(permissionId) {
    return PermissionRepository.getPermissionById(permissionId);
  }

  static async createPermission(permissionData) {
    const { nome, descricao } = permissionData;

    const existingPermission = await PermissionRepository.getPermissionByName(nome);
    if (existingPermission) {
      throw new Error('Permission already exists');
    }

    return PermissionRepository.createPermission({ nome, descricao });
  }

  static async updatePermission(permissionId, updatedData) {
    try {
        return await PermissionRepository.updatePermission(permissionId, updatedData);
      } catch (error) {
        throw new Error(error.message); 
      }
  }

  static async deletePermission(permissionId) {
    return PermissionRepository.deletePermission(permissionId);
  }
}