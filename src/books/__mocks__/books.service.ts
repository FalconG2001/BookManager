import { bookStub } from '../test/stubs/books.stub';

export const BooksService = jest.fn().mockReturnValue({
  getBookById: jest.fn().mockResolvedValue(bookStub()),
  getAllBooks: jest.fn().mockResolvedValue([bookStub()]),
  createBook: jest.fn().mockResolvedValue(bookStub()),
  updateBook: jest.fn().mockResolvedValue(bookStub()),
  deleteBook: jest.fn().mockResolvedValue(undefined),
});
