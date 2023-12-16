import PermissionService from '../services/permissionService.js';

export default class PermissionController {
  static async getPermissions(req, res) {
    try {
      const permissions = await PermissionService.getAllPermissions();
      res.status(200).json(permissions);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getPermissionById(req, res) {
    try {
      const permission = await PermissionService.getPermissionById(req.params.permissionId);
      res.status(302).json(permission);
    } catch (e) {
      res.status(404).json({ message: "Permission not found" });
    }
  }

  static async createPermission(req, res) {
    try {
      const { nome, descricao } = req.body;
      if (!nome || !descricao) {
        return res.status(400).json({ message: 'Name and address.' });
      }

      const newPermission = await PermissionService.createPermission({ nome, descricao });
      res.status(201).json(newPermission);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async updatePermission(req, res) {
    try {
      const updatedPermission = await PermissionService.updatePermission(req.params.permissionId, req.body);
      if (!updatedPermission) return res.status(404).json({ message: 'Permission not found' });
      res.status(200).json(updatedPermission);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deletePermission(req, res) {
    try {
        const result = await PermissionService.deletePermission(req.params.permissionId);
        if (!result) return res.status(404).json({ message: 'Permission not found' });
        res.status(200).json({ message: 'Permission deleted' });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
  }
}