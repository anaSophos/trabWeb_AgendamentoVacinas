import mongoose from 'mongoose'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

import UserService from '../services/userService.js';

export default class UserController {
  static async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.userId);
      res.status(302).json(user);
    } catch (e) {
      res.status(404).json({ message: 'User not found' });
    }
  }

  static async getUserByEmail(req, res) {
    try {
      const user = await UserService.getUserByEmail(req.params.email);
      res.status(201).json(user);
    } catch (e) {
      res.status(404).json({ message: 'User not found' });
    }
  }

  static async createUser(req, res) {
    try {
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const updatedUser = await UserService.updateUser(req.params.userId, req.body);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(updatedUser);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const result = await UserService.deleteUser(req.params.userId);
      if (!result) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}