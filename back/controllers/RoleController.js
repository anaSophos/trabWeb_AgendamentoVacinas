import RoleService from '../services/roleService.js';

export default class RoleController {
  static async getRoles(req, res) {
    try {
      const roles = await RoleService.getAllRoles();
      res.status(200).json(roles);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getRoleById(req, res) {
    try {
      const role = await RoleService.getRoleById(req.params.roleId);
      res.status(302).json(role);
    } catch (e) {
      res.status(404).json({ message: "Role not found" });
    }
  }

  static async createRole(req, res) {
    try {
      const { nome, descricao } = req.body;
      if (!nome || !descricao) {
        return res.status(400).json({ message: 'Name and address.' });
      }

      const newRole = await RoleService.createRole({ nome, descricao });
      res.status(201).json(newRole);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async updateRole(req, res) {
    try {
      const updatedRole = await RoleService.updateRole(req.params.roleId, req.body);
      if (!updatedRole) return res.status(404).json({ message: 'Role not found' });
      res.status(200).json(updatedRole);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteRole(req, res) {
    try {
        const result = await RoleService.deleteRole(req.params.roleId);
        if (!result) return res.status(404).json({ message: 'Role not found' });
        res.status(200).json({ message: 'Role deleted' });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
  }
}