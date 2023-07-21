import { BookModel } from '../../books.model';

export const bookStub = (): BookModel => {
  return {
    id: '2',
    title: 'Harry Potter And The secret of chambers',
    author: 'JK Rowling',
    description: 'Slytherine',
    publisher: 'phyleven',
    price: 5,
    rating: 4,
  };
};
