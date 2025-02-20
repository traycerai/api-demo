# API Documentation

## User Endpoints

Base URL: `/api/users`

### Get All Users

Retrieves a list of all users.

- **URL:** `/`
- **Method:** `GET`
- **Auth required:** No
- **Permissions required:** None

#### Success Response

- **Code:** 200 OK
- **Content example:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "username": "johndoe",
      "email": "john@example.com",
      "created_at": "2024-02-20T10:00:00.000Z",
      "updated_at": "2024-02-20T10:00:00.000Z"
    }
  ]
}
```

### Create User

Creates a new user.

- **URL:** `/`
- **Method:** `POST`
- **Auth required:** No
- **Permissions required:** None

#### Request Body

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Success Response

- **Code:** 201 CREATED
- **Content example:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "created_at": "2024-02-20T10:00:00.000Z",
    "updated_at": "2024-02-20T10:00:00.000Z"
  }
}
```

#### Error Response

- **Code:** 400 BAD REQUEST
- **Content example:**

```json
{
  "success": false,
  "error": "Email already exists"
}
```

### Get User by ID

Retrieves a specific user by their ID.

- **URL:** `/:id`
- **Method:** `GET`
- **Auth required:** No
- **Permissions required:** None
- **URL Parameters:** `id=[integer]`

#### Success Response

- **Code:** 200 OK
- **Content example:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "created_at": "2024-02-20T10:00:00.000Z",
    "updated_at": "2024-02-20T10:00:00.000Z"
  }
}
```

#### Error Response

- **Code:** 404 NOT FOUND
- **Content example:**

```json
{
  "success": false,
  "error": "User not found"
}
```

## Error Responses

All endpoints may return the following error responses:

### Internal Server Error

- **Code:** 500 INTERNAL SERVER ERROR
- **Content example:**

```json
{
  "success": false,
  "error": "Internal server error"
}
```

## Notes

- All timestamps are returned in ISO 8601 format.
- The API returns JSON responses with a `success` boolean flag.
- Successful responses include a `data` field, while error responses include an `error` field with a description.