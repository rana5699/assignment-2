# Bicycle Store Application API

A Bicycle Store application built with **TypeScript** , **Express.js** , and **MongoDB** with **Mongoose**. The app includes special features for **product management** , **order processing** , **inventory control** , and **revenue tracking**.

---

## Features !!

- Add, Get, update, and delete bicycles.
- View all bicycles with search and filtering **name** , **brand** and **type** and **specific ID**.
- Place orders with inventory management logic.
- Calculate total revenue from orders using MongoDB aggregation.

---

### `Technologies` Used

- Backend : `Express.js` with `TypeScript`
- Database : `MongoDB` with `Mongoose`
- Error Handling : Fllow globals errorHandle model
- Environment Variables : Managed with `dotenv`

## API Reference

# Bicycles

#### Create a Bicycle (POST)

```http
   /api/products
```

#### Get All Bicycles (GET)

```http
   /api/products
```

#### Get a Specific Bicycle (GET)

```http
   /api/products/:productId
```

| Parameter   | Type     | Description                       |
| :---------- | :------- | :-------------------------------- |
| `productId` | `string` | **Required**. Id of item to fetch |

#### Update a Bicycle (PUT)

```http
   /api/products/:productId
```

| Parameter   | Type     | Description                       |
| :---------- | :------- | :-------------------------------- |
| `productId` | `string` | **Required**. Id of item to fetch |

#### Delete a Bicycle (DELETE)

```http
   /api/products/:productId
```

| Parameter   | Type     | Description                       |
| :---------- | :------- | :-------------------------------- |
| `productId` | `string` | **Required**. Id of item to fetch |

## Orders

#### Order a Bicycle (POST)

```http
   /api/orders
```

#### Calculate Revenue from Orders (Aggregation) (GET)

```http
   /api/orders/revenue
```

## Server Live URL

https://assignment-api-project.vercel.app/
