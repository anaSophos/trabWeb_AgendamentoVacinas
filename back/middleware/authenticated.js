import jwt from 'jsonwebtoken';

export default class Authenticated {
    static async checkToken(req, res, next) {
        const authToken = req.headers.authorization;
        const token = authToken && authToken.split(' ')[1];

        if (!token) {
            return res.status(401).json({ 'message': "Access Denied" });
        }

        try {
            const secret = process.env.SECRET;

            const decodedToken = jwt.verify(token, secret);

            // Adiciona a informação do tipo de usuário ao request
            req.userType = decodedToken.userType;

            next();
        } catch (e) {
            res.status(500).json({ 'message': e.message });
        }
    }
}
/*import jwt from 'jsonwebtoken'

export default class Authenticated{
    static async checkToken(req, res, next){
        const authToken = req.headers.authorization
        const token = authToken && authToken.split(' ')[1]

        if(!token){
            return res.status(401).json({'message': "Access Denied"})
        }

        try{
            const secret = process.env.SECRET

            jwt.verify(token, secret)

            next()
        }catch(e){
            res.status(500).json({'message': e.message }) 
        }
    }
}*/