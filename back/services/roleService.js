import RoleRepository from '../repositories/RoleRepository.js';

export default class RoleService {
  static async getAllRoles() {
    return RoleRepository.getAllRoles();
  }

  static async getRoleById(roleId) {
    return RoleRepository.getRoleById(roleId);
  }

  static async createRole(roleData) {
    const { nome, descricao } = roleData;

    const existingRole = await RoleRepository.getRoleByName(nome);
    if (existingRole) {
      throw new Error('Role already exists');
    }

    return RoleRepository.createRole({ nome, descricao });
  }

  static async updateRole(roleId, updatedData) {
    try {
        return await RoleRepository.updateRole(roleId, updatedData);
      } catch (error) {
        throw new Error(error.message); 
      }
  }

  static async deleteRole(roleId) {
    return RoleRepository.deleteRole(roleId);
  }
}