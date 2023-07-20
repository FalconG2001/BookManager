import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsNotEmpty()
  author: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNotEmpty()
  publisher: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  rating: number;
}
