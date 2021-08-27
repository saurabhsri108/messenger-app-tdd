import request from 'supertest';
import app from './app';

describe('User Authentication APIs', () => {

  describe('POST /api/v1/users/create', () => {
    const username = Math.random().toString(32).substr(2, 10);
    const phoneNumber = Math.floor(Math.random() * 10000000000);

    it('should respond with status 201', async () => {
      const response = await request(app).post('/api/v1/users/create').send({
        username: username,
        phoneNumber: phoneNumber,
      });

      expect(response.statusCode).toBe(201);
    });

    it('should receive content-type as json', async () => {
      const response = await request(app).post('/api/v1/users/create').send({
        username: username, phoneNumber: phoneNumber,
      });
      expect(response.headers['content-type']).
          toEqual(expect.stringContaining('json'));
    });

    it('should receive the object with id, username, and isAdmin properties',
        async () => {
          const response = await request(app).
              post('/api/v1/users/create').
              send({username: username, phoneNumber: phoneNumber});
          expect(response.body).toEqual(({
            id: expect.any(String),
            username: username,
            isAdmin: false,
          }));
        });

    it(
        'should fail with 400 because username or phoneNumber or both are missing',
        async () => {
          const bodyRequests = [
            {username: username},
            {phoneNumber: phoneNumber},
            {},
          ];

          for (const req of bodyRequests) {
            const response = await request(app).
                post('/api/v1/users/create').
                send(req);
            expect(response.statusCode).toBe(400);
          }
        });
  });

});