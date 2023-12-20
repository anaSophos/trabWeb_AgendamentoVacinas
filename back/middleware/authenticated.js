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

            req.userType = decodedToken.userType;

            const expirationTime = decodedToken.exp;
            const currentTime = Math.floor(Date.now() / 1000);

            if (expirationTime - currentTime < 20) {
                res.setHeader('Token-About-To-Expire', 'true');
            }

            next();
        } catch (e) {
            res.status(500).json({ 'message': "Token expired" });
        }
    }
}
