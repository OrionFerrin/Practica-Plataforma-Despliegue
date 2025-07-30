# School Cafeteria API

This is a REST API for managing a school cafeteria. It provides endpoints for managing menu items, orders, and other cafeteria-related resources.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd school-cafeteria-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

### Menu Items

- `GET /api/menu` - Retrieve all menu items
- `POST /api/menu` - Create a new menu item
- `PUT /api/menu/:id` - Update a menu item by ID
- `DELETE /api/menu/:id` - Delete a menu item by ID

### Orders

- `GET /api/orders` - Retrieve all orders
- `POST /api/orders` - Create a new order
- `PUT /api/orders/:id` - Update an order by ID
- `DELETE /api/orders/:id` - Delete an order by ID

## Running Tests

To run the unit tests, use the following command:
```
npm test
```

This will execute the tests defined in the `test/server.test.js` file.