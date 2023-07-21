import { PipeTransform, BadRequestException } from '@nestjs/common';
import { UpdateBookDto } from '../dto/createBook.dto';
import validator from 'validator';

export class UpdateValidationPipe implements PipeTransform {
  transform(updates: UpdateBookDto) {
    if (Object.keys(updates).length === 0) {
      throw new BadRequestException('Enter fields to be updated!');
    }

    if (updates.rating && (updates.rating > 5 || updates.rating < 1)) {
      throw new BadRequestException('rating must be between 1 and 5');
    }

    if (
      (updates.author &&
        validator.isEmpty(updates.author, {
          ignore_whitespace: true,
        })) ||
      (updates.description &&
        validator.isEmpty(updates.description, {
          ignore_whitespace: true,
        })) ||
      (updates.publisher &&
        validator.isEmpty(updates.publisher, {
          ignore_whitespace: true,
        })) ||
      (updates.title &&
        validator.isEmpty(updates.title, {
          ignore_whitespace: true,
        }))
    ) {
      throw new BadRequestException('There should be no empty fields!');
    }

    return updates;
  }
}
