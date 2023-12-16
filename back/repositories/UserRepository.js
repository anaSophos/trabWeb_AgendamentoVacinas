import User from '../models/User.js';
import bcrypt from 'bcrypt';

export default class UserRepository {
  static async getAllUsers() {
    return User.find().exec();
  }

  static async getUserById(userId) {
    return User.findOne({ _id: userId }).exec();
  }

  static async createUser(userData) {
    const { name, email, password, cpf, rg, phoneNum, birth } = userData;

    const salt = bcrypt.genSaltSync();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      cpf,
      rg,
      phoneNum,
      birth,
    };

    return User.create(newUser);
  }

  static async updateUser(userId, updatedData) {
    let user = await User.findOne({ _id: userId }).exec();
    if (!user) return null;

    if (updatedData.name) user.name = updatedData.name;
    if (updatedData.email) user.email = updatedData.email;
    if (updatedData.phoneNum) user.phoneNum = updatedData.phoneNum;

    return user.save();
  }

  static async deleteUser(userId) {
    const user = await User.findOne({ _id: userId }).exec();
    if (!user) return false;

    await User.deleteOne(user);
    return true;
  }
}