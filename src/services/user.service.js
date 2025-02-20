const Joi = require('joi');
const knex = require('../database/db.js');

const userSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .min(6)
        .required()
});

class UserService {
    async validateUser(userData) {
        try {
            return await userSchema.validateAsync(userData);
        } catch (error) {
            throw new Error(`Validation error: ${error.message}`);
        }
    }

    async createUser(userData) {
        // Validate user data
        const validatedData = await this.validateUser(userData);

        try {
            const [userId] = await knex('users').insert(validatedData);
            return await knex('users')
                .where({ id: userId })
                .first();
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async getAllUsers() {
        try {
            return await knex('users')
                .select('id', 'username', 'email')
                .orderBy('id');
        } catch (error) {
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }

    async getUserById(id) {
        try {
            const user = await knex('users')
                .where({ id })
                .select('id', 'username', 'email')
                .first();

            if (!user) {
                throw new Error('User not found');
            }

            return user;
        } catch (error) {
            throw new Error(`Error fetching user: ${error.message}`);
        }
    }
}

module.exports = UserService;
