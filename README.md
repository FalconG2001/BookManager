# BOOK STORE API

Welcome to the Online Bookstore API documentation! This RESTful API allows you to interact with bookstore, enabling you to perform various operations like, Retrieving a list of books available in the store, Get details of a specific book by its ID, Add a new book to the store, Update the details of an existing book, Delete a book from the store. The API is designed to be simple and easy to use.

## Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- NestJs
- TypeScript
  
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
Unit Tests
```bash
$ npm run test
```

## API
### /GET Requests
**Get All Books**
```sh
http://localhost:3000/books
```
Retrieves a list of all available books in the bookstore.

Example:
```json
[
    {
        "_id": "64b98f46ff3aa483c5b2d59d",
        "title": "Harry Potter",
        "description": "The Order of Phoenix",
        "author": "JK Rowling",
        "publisher": "Phyleven",
        "price": 10,
        "rating": 3,
        "__v": 0
    },
    {
        "_id": "64b98f8bff3aa483c5b2d5a0",
        "title": "The Alchemist",
        "description": "When you want something, the whole universe conspires to make it happen!",
        "author": "paulo coelho",
        "publisher": "Phyleven",
        "price": 10,
        "rating": 5,
        "__v": 0
    },
    {
        "_id": "64b995e17c24d771144d020c",
        "title": "A Song of Ice and Fire",
        "description": "Winter Is Coming",
        "author": "George R. R. Martin",
        "publisher": "Phyleven",
        "price": 10,
        "rating": 5,
        "__v": 0
    },
    {
        "_id": "64ba4ad6b675b1ecd7dba0f0",
        "title": "The Da Vinci Code",
        "description": "Mystery thriller novel",
        "author": "Dan Brown",
        "publisher": "Phyleven",
        "price": 10,
        "rating": 3,
        "__v": 0
    }
]
```

**Get Book By ID**
```sh
http://localhost:3000/books/64b98f8bff3aa483c5b2d5a0
```
Retrieve detailed information about a specific book using its ID.

Example:
```json
{
    "_id": "64b98f8bff3aa483c5b2d5a0",
    "title": "The Alchemist",
    "description": "When you want something, the whole universe conspires to make it happen!",
    "author": "paulo coelho",
    "publisher": "Phyleven",
    "price": 10,
    "rating": 5,
    "__v": 0
}
```

### /POST Request
**Create Book**
```sh
http://localhost:3000/books
```
Adds new book to the store

Example:

Body:
```json
{
    "title": "The Da Vinci Code",
    "description": "Mystery thriller novel",
    "author": "Dan Brown",
    "publisher": "Phyleven",
    "price": 10
}
```

Response:
```json
{
    "title": "The Da Vinci Code",
    "description": "Mystery thriller novel",
    "author": "Dan Brown",
    "publisher": "Phyleven",
    "price": 10,
    "rating": 3,
    "_id": "64ba4ad6b675b1ecd7dba0f0",
    "__v": 0
}
```

### /PATCH Request
**Update Book Data**
```sh
http://localhost:3000/books/64b995e17c24d771144d020c
```
Updates the Specific book using its ID

Example:

Body:
```json
{
    "description": "Winter Is Coming",
}
```

Before:
```json
{
    "_id": "64b995e17c24d771144d020c",
    "title": "A Song of Ice and Fire",
    "description": "Valar Morghulis",
    "author": "George R. R. Martin",
    "publisher": "Phyleven",
    "price": 10,
    "rating": 5,
    "__v": 0
}
```

After Response:
```json
{
    "_id": "64b995e17c24d771144d020c",
    "title": "A Song of Ice and Fire",
    "description": "Winter Is Coming",
    "author": "George R. R. Martin",
    "publisher": "Phyleven",
    "price": 10,
    "rating": 5,
    "__v": 0
}
```

### /Delete Request
**Delete Book**
```sh
http://localhost:3000/books/64ba49a7b675b1ecd7dba0e7
```
Removes a book from store using its ID.

## Error Responses
In case of an error, the API will respond with appropriate error messages along with the status code.

Example Error Response:

1. **Invalid ID**

```json
{
    "message": "Book with 64b98f8bff3aa483c5b2d5a not found",
    "error": "Not Found",
    "statusCode": 404
}
```
2. **Validation Errors**
```json
{
    "message": "rating must be between 1 and 5",
    "error": "Bad Request",
    "statusCode": 400
}
```
```json
{
    "message": "There should be no empty fields!",
    "error": "Bad Request",
    "statusCode": 400
}
```
**Refer Books Manager.postman_test_run.json for more tests and results**
