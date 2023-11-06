import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default class AuthService {
  async login(dto) {
    const { email, password } = dto;

    try {
      const usuario = await User.findOne({ email }).exec();

      if (!usuario) {
        throw new Error('Usuário não cadastrado');
      }

      const senhaIguais = await bcrypt.compare(password, usuario.password);

      if (!senhaIguais) {
        throw new Error('Usuário ou senha inválida');
      }

      const secret = process.env.SECRET;

      const token = jwt.sign({
        id: usuario._id,
        email: usuario.email,
      }, secret, { expiresIn: 86400 });

      return {
        message: 'Usuário conectado',
        token,
      };
    } catch (e) {
      throw e;
    }
  }
}
