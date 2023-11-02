import mongoose from 'mongoose'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

export default class UserController{

    static async getUsers(req, res){
        try{
            const users = await User.find().exec()
        
            res.status(200).json(users)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

    static async getUserById(req,res){
        try{
            const user = await User.findOne({_id : req.params.userId}).exec()

            if(!user) return res.status(404).json({'message': "User not found"})

            return res.status(302).json(user)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async createUser(req,res){
        try{
            const {name, email, password, cpf, rg, phoneNum, birth} = req.body

            const salt = bcrypt.genSaltSync()

            const hashedPassword = await bcrypt.hash(password, salt)

            const newUser = {
                name,
                email,
                password: hashedPassword,
                cpf,
                rg,
                phoneNum,
                birth        
            }

            const userCreated = await User.create(newUser)

            return res.status(201).json(userCreated)
        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async updateUser(req, res){
        try{
            let user = await User.findOne({_id : req.params.userId}).exec()

            if(!user) return res.status(404).json({'message': "User not found"})

            if(req.body?.name) user.name = req.body.name
            if(req.body?.email) user.email = req.body.email
            if(req.body?.phoneNum) user.phoneNum = req.body.phoneNum

            const changedUser = await user.save()

            return res.status(200).json(changedUser)

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }


    static async deleteUser(req, res){
        try{
            let user = await User.findOne({_id : req.params.userId}).exec()

            if(!user) return res.status(404).json({'message': "User not found"})

            await User.deleteOne(user)

            return res.status(200).json({"message": "User deleted"})

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

}