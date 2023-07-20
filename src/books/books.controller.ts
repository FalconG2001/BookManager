import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';
import { GetBookFilterDto } from './dto/getBooksFilter.dto';
import { CreateBookDto } from './dto/createBook.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks(
    @Query(ValidationPipe) filterDto: GetBookFilterDto,
  ): Promise<Book[]> {
    return await this.booksService.getAllBooks(filterDto);
  }

  @Get('/:id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return await this.booksService.getBookById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createTask(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.booksService.createTask(createBookDto);
  }

  @Patch('/:id')
  async updateBook(
    @Param('id') id: string,
    @Body() updatesDto: CreateBookDto,
  ): Promise<Book> {
    return await this.booksService.updateBook(id, updatesDto);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.booksService.deleteBook(id);
  }
}
