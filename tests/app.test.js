const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  describe('GET /health', () => {
    it('should return 200 and healthy status', async () => {
      const response = await request(app)
        .get('/health')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toEqual({
        status: 'OK',
        message: 'Server is healthy'
      });
    });
  });
});