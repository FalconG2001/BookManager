import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetBookFilterDto {
  @IsOptional()
  @IsNotEmpty()
  author: string;

  @IsOptional()
  @IsNotEmpty()
  price: number;

  @IsOptional()
  @IsNotEmpty()
  rating: number;

  @IsOptional()
  @IsNotEmpty()
  publisher: string;

  @IsOptional()
  @IsNotEmpty()
  title: string;
}
