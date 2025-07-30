const request = require('supertest');
const app = require('../src/server');

describe('School Cafeteria API', () => {
    it('should respond with a 200 status for the root endpoint', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    // Add more tests for other endpoints and functionalities as needed
});