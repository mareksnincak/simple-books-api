## Description

E2e tests for simple books API

## Installation

```bash
$ npm install
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Tasks

Developers finished following tasks during last scrum sprint, please create E2E tests to cover work done in those tasks to ensure that they work correctly.

### API

The API is available `https://simple-books-api.glitch.me`

Open API and Postman collection are available in the `/docs` folder

[Original documentation](https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md)


### Task 1 - Add endpoint to list collection of books
GET `/books`

Returns a list of books.
Optional query parameters:
- type: fiction or non-fiction
- limit: a number between 1 and 20.


### Task 2 - Add endpoint to submit a new book order
POST `/orders`

Allows you to submit a new order. Requires authentication.
The request body needs to be in JSON format and include the following properties:
 - `bookId` - Integer - Required
 - `customerName` - String - Required


### Task 3 - Add endpoints to view customer orders - single order and all orders
GET `/orders`

Allows you to view all orders. Requires authentication.

GET `/orders/:orderId`

Allows you to view an existing order. Requires authentication.


### Task 4 - Add endpoint to update an order
PATCH `/orders/:orderId`

Update an existing order. Requires authentication.
The request body needs to be in JSON format and allows you to update the following properties:
 - `customerName` - String

Example
```
PATCH /orders/PF6MflPDcuhWobZcgmJy5

Authorization: Bearer <YOUR TOKEN>
{
  "customerName": "John"
}
```



### Task 5 - Add endpoint to delete an order
DELETE `/orders/:orderId`

Delete an existing order. Requires authentication.
The request body needs to be empty.

Example
```
DELETE /orders/PF6MflPDcuhWobZcgmJy5

Authorization: Bearer <YOUR TOKEN>
```
