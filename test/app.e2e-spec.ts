import * as request from 'supertest';

describe('Simple Books API', () => {
  const baseUrl = 'https://simple-books-api.glitch.me';

  describe('GET /books/:bookId', () => {
    it('should return book by id', async () => {
      const bookId = 1;

      const result = await request(baseUrl).get(`/books/${bookId}`);

      expect(result.statusCode).toEqual(200);
      expect(result.body).toEqual({
        id: 1,
        name: 'The Russian',
        author: 'James Patterson and James O. Born',
        isbn: '1780899475',
        type: 'fiction',
        price: 12.98,
        'current-stock': 12,
        available: true,
      });
    });
  });
});
