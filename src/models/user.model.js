const db = require('../database/knexfile');
const TABLE_NAME = 'users';

class User {
  static async findById(id) {
    try {
      const user = await db(TABLE_NAME)
        .where({ id })
        .select('id', 'email', 'name', 'created_at', 'updated_at')
        .first();
      return user || null;
    } catch (error) {
      throw new Error(`Error finding user by ID: ${error.message}`);
    }
  }

  static async findByEmail(email) {
    try {
      const user = await db(TABLE_NAME)
        .where({ email })
        .select('id', 'email', 'name', 'created_at', 'updated_at')
        .first();
      return user || null;
    } catch (error) {
      throw new Error(`Error finding user by email: ${error.message}`);
    }
  }

  static async create(userData) {
    try {
      const [user] = await db(TABLE_NAME)
        .insert({
          email: userData.email,
          name: userData.name,
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning(['id', 'email', 'name', 'created_at', 'updated_at']);
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  static async getAll() {
    try {
      const users = await db(TABLE_NAME)
        .select('id', 'email', 'name', 'created_at', 'updated_at')
        .orderBy('created_at', 'desc');
      return users;
    } catch (error) {
      throw new Error(`Error fetching all users: ${error.message}`);
    }
  }
}

module.exports = User;