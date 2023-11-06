import mongoose from 'mongoose'
import Role from '../models/Role.js'

export default class RoleController{
    static async getRoles(req, res){
        try{
            const roles = await Role.find().exec()
        
            res.status(200).json(roles)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async getRoleById(req,res){
        try{
            const role = await Role.findOne({_id : req.params.roleId}).exec()

            if(!role) return res.status(404).json({'message': "Role not found"})

            return res.status(302).json(role)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async createRole(req, res){
        try {
            const { nome, descricao } = req.body;
      
            if (!nome || !descricao) {
              return res.status(400).json({ 'message': 'Name and address.' });
            }

            const papel = await Role.findOne({nome : nome}).exec()

            if (papel){
                return res.status(400).json({'message': "Role already exists"})
            }
      
            const newRole = {
              nome,
              descricao,
            };
      
            const roleCreated = await Role.create(newRole);
      
            return res.status(201).json(roleCreated);
          } catch (e) {
            res.status(500).json({ 'message': e.message });
          }
    }

    static async updateRole(req, res){
        try{
            let role = await Role.findOne({_id : req.params.roleId}).exec()

            if(!role) return res.status(404).json({'message': "Role not found"})

            if(req.body?.nome) {
                const papel = await Role.findOne({nome : req.body.nome}).exec()
                if (papel){
                    return res.status(400).json({'message': "Role already exists"})
                }
                role.name = req.body.nome
            }
            if(req.body?.descricao) role.descricao = req.body.descricao

            const changedRole = await role.save()

            return res.status(200).json(changedRole)

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async deleteRole(req, res){
        try{
            let role = await Role.findOne({_id : req.params.roleId}).exec()

            if(!role) return res.status(404).json({'message': "Role not found"})

            await Role.deleteOne(role)

            return res.status(200).json({"message": "Role deleted"})

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }
}