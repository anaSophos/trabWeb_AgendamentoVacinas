import mongoose from 'mongoose'
import Permission from '../models/Permission.js'

export default class PermissionController{
    static async getPermission(req, res){
        try{
            const permissions = await Permission.find().exec()
        
            res.status(200).json(permissions)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async getPermissionById(req,res){
        try{
            const permission = await Permission.findOne({_id : req.params.permissionId}).exec()

            if(!permission) return res.status(404).json({'message': "Permission not found"})

            return res.status(302).json(permission)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async createPermission(req, res){
        try {
            const { nome, descricao } = req.body;
      
            if (!nome || !descricao) {
              return res.status(400).json({ 'message': 'Permission and address.' });
            }

            const permissao = await Permission.findOne({nome : nome}).exec()

            if (permissao){
                return res.status(400).json({'message': "Permission already exists"})
            }
      
            const newPermission = {
              nome,
              descricao,
            };
      
            const permissionCreated = await Permission.create(newPermission);
      
            return res.status(201).json(permissionCreated);
          } catch (e) {
            res.status(500).json({ 'message': e.message });
          }
    }

    static async updatePermission(req, res){
        try{
            let permission = await Permission.findOne({_id : req.params.permissionId}).exec()

            if(!permission) return res.status(404).json({'message': "Permission not found"})

            if(req.body?.nome) {
                const permissao = await Permission.findOne({nome : req.body.nome}).exec()
                if (permissao){
                    return res.status(400).json({'message': "Permission already exists"})
                }
                permission.name = req.body.nome
            }
            if(req.body?.descricao) permission.descricao = req.body.descricao

            const changedPermission = await permission.save()

            return res.status(200).json(changedPermission)

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async deletePermission(req, res){
        try{
            let permission = await Permission.findOne({_id : req.params.permissionId}).exec()

            if(!permission) return res.status(404).json({'message': "Permission not found"})

            await Permission.deleteOne(permission)

            return res.status(200).json({"message": "Permission deleted"})

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }
}