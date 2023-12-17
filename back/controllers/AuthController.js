import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Operator from '../models/Operator.js';

export default class AuthController {
    static async loginUser(req, res) {
        try {
            const { email, password, userType } = req.body;

            let userModel;
            let userRole;

            if (userType === 'user') {
                userModel = User;
                userRole = 'user';
            } else if (userType === 'operator') {
                userModel = Operator;
                userRole = 'operator';
            } else {
                return res.status(422).json({ 'message': "Invalid user type" });
            }

            const usuario = await userModel.findOne({ email: email }).exec();

            if (!usuario) {
                return res.status(404).json({ 'message': "User not found" });
            }

            const senhaIguais = await bcrypt.compare(password, usuario.password);

            if (!senhaIguais) {
                return res.status(422).json({ 'message': "Incorrect Password" });
            }

            try {
                const secret = process.env.SECRET;

                const token = jwt.sign({
                    id: usuario._id,
                    email: usuario.email,
                    userType: userRole // Adiciona o tipo de usuário ao payload
                },
                    secret, { expiresIn: 86400 } //86400
                );

                return res.status(200).json({ 'message': "Connected User", token });
            } catch (e) {
                res.status(500).json({ 'message': e.message });
            }

        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }

    static async refreshToken(req, res) {
        const refreshToken = req.headers.authorization.split(' ')[1];

        if (!refreshToken) {
            return res.status(401).json({ 'message': "Refresh token missing" });
        }

        try {
            const secret = process.env.SECRET;
            const decodedToken = jwt.verify(refreshToken, secret);

            const newToken = jwt.sign({
                id: decodedToken.id,
                email: decodedToken.email,
                userType: decodedToken.userType
            },
                secret, { expiresIn: 86400 } //86400
            );

            return res.status(200).json({ 'message': "New Access Token Generated", token: newToken });

        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }
}
/*import bcrypt from 'bcrypt'
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

}*/