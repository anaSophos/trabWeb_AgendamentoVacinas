import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export default class AuthController{
    static async loginUser(req, res){
        try{
            const {email, password} = req.body

            const usuario = await User.findOne({email : email}).exec()

            if (!usuario){
                return res.status(404).json({'message': "User not found"})
            }

            const senhaIguais = await bcrypt.compare(password, usuario.password)

            if(!senhaIguais){
                return res.status(422).json({'message': "Incorrect Password"})
            }

            try{
                const secret = process.env.SECRET

                const token = jwt.sign({
                    id: User._id,
                    email: User.email
                },
                secret,{expiresIn: 86400}
                )

                return res.status(200).json({'message': "Coneccted User", token})
            }catch(e){
                res.status(500).json({'message': e.message }) 
            }

        }catch(e){
            res.status(500).json({'message': e.message })
        }
    }

}