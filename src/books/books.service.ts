import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './books.model';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetBookFilterDto } from './dto/getBooksFilter.dto';
import { CreateBookDto } from './dto/createBook.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async getAllBooks(filterDto: GetBookFilterDto): Promise<Book[]> {
    const books = await this.bookModel.find(filterDto).exec();
    return books;
  }

  async getBookById(id: string): Promise<Book> {
    let book: Book;
    try {
      book = await this.bookModel.findById(id);
    } catch (error) {
      throw new NotFoundException(`Book with ${id} not found`);
    }

    if (!book) {
      throw new NotFoundException(`Book with ${id} not found`);
    }

    return book;
  }

  async createTask(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const newBook = new this.bookModel(createBookDto);
      await newBook.save();

      return newBook;
    } catch (error) {
      throw new Error('something went wrong');
    }
  }

  async updateBook(id: string, updatesDto: CreateBookDto): Promise<Book> {
    try {
      const task = await this.bookModel.findByIdAndUpdate(id, updatesDto, {
        new: true,
      });
      await task.save();
      return task;
    } catch (error) {
      throw new NotFoundException(`The book with ${id} is not found`);
    }
  }

  async deleteBook(id: string): Promise<void> {
    const res = await this.bookModel.deleteOne({ _id: id });

    if (res.deletedCount === 0) {
      throw new NotFoundException('Could not find the Book!');
    }
  }
}
