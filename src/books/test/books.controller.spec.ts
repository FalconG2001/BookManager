import { Test } from '@nestjs/testing';
import { BooksController } from '../books.controller';
import { BooksService } from '../books.service';
import { bookStub } from './stubs/books.stub';
import { Book } from '../books.model';
import { GetBookFilterDto } from '../dto/getBooksFilter.dto';
import { CreateBookDto, UpdateBookDto } from '../dto/createBook.dto';

jest.mock('../books.service.ts');

describe('BooksController', () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = module.get<BooksController>(BooksController);
    booksService = module.get<BooksService>(BooksService);
    jest.clearAllMocks();
  });

  describe('Get Book', () => {
    describe('when get book is called', () => {
      let book: Book;
      beforeEach(async () => {
        book = await booksController.getBookById(bookStub().id);
      });

      test('then it should call book service', () => {
        expect(booksService.getBookById).toBeCalledWith(bookStub().id);
      });

      test('it should return a book', () => {
        expect(book).toEqual(bookStub());
      });
    });
  });

  describe('Get All Books in store', () => {
    describe('when getAllBooks is called', () => {
      const filterDto: GetBookFilterDto = {
        author: '',
        publisher: '',
        title: '',
        price: 3,
        rating: 4,
      };
      let books: Book[];
      beforeEach(async () => {
        books = await booksController.getBooks(filterDto);
      });

      test('then it should call book service', () => {
        expect(booksService.getAllBooks).toHaveBeenCalled();
      });

      test('it should return all books', () => {
        expect(books).toEqual([bookStub()]);
      });
    });
  });

  describe('Create Book', () => {
    describe('when createBook is called', () => {
      let book: Book;
      let createBookDto: CreateBookDto;

      beforeEach(async () => {
        createBookDto = {
          title: bookStub().title,
          author: bookStub().author,
          description: bookStub().description,
          price: bookStub().price,
          publisher: bookStub().publisher,
          rating: bookStub().rating,
        };
        book = await booksController.createBook(createBookDto);
      });

      test('then it should call book service', () => {
        expect(booksService.createBook).toHaveBeenCalledWith(createBookDto);
      });

      test('it should return new book', () => {
        expect(book).toEqual(bookStub());
      });
    });
  });

  describe('Update Book', () => {
    describe('when updateBook is called', () => {
      let book: Book;
      let updateBookDto: UpdateBookDto;

      beforeEach(async () => {
        updateBookDto = {
          title: bookStub().title,
          author: bookStub().author,
          description: bookStub().description,
          price: bookStub().price,
          publisher: bookStub().publisher,
          rating: bookStub().rating,
        };
        book = await booksController.updateBook(bookStub().id, updateBookDto);
      });

      test('then it should call book service', () => {
        expect(booksService.updateBook).toHaveBeenCalledWith(
          bookStub().id,
          updateBookDto,
        );
      });

      test('it should return updates book', () => {
        expect(book).toEqual(bookStub());
      });
    });
  });

  describe('Delete Book', () => {
    describe('when deleteBook is called', () => {
      let book;

      beforeEach(async () => {
        book = await booksController.deleteBook(bookStub().id);
      });

      test('then it should call book service', () => {
        expect(booksService.deleteBook).toHaveBeenCalledWith(bookStub().id);
      });

      test('it should return nothing', () => {
        expect(book).toEqual(undefined);
      });
    });
  });
});
