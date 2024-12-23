# User Registration Endpoint Documentation

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their email, full name, and password.

## Request Body
The request body should be a JSON object containing the following fields:

- `email`: A valid email address (required).
- `fullname`: An object containing:
    - `firstname`: The user's first name, at least 3 characters long (required).
    - `lastname`: The user's last name, at least 3 characters long (optional).
- `password`: A password, at least 6 characters long (required).

Example:
```json
{
    "email": "user@example.com",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the user's token and user details.

Example:
```json
{
    "token": "jwt_token_here",
    "user": {
        "_id": "user_id_here",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "user@example.com",
        "password": "hashed-password",
        "socketId": null
    }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing an array of error messages.

Example:
```json
{
    "errors": [
        {
            "msg": "Please enter a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing an error message.

Example:
```json
{
    "error": "Please fill in all fields"
}
```

# User Login Endpoint Documentation

## Endpoint
`POST /users/login`

## Description
This endpoint allows a user to log in by providing their email and password.

## Request Body
The request body should be a JSON object containing the following fields:

- `email`: A valid email address (required).
- `password`: A password, at least 6 characters long (required).

Example:
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user's token and user details.

Example:
```json
{
    "token": "jwt_token_here",
    "user": {
        "_id": "user_id_here",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "user@example.com",
        "password": "hashed-password",
        "socketId": null
    }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing an array of error messages.

Example:
```json
{
    "errors": [
        {
            "msg": "Please enter a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing an error message.

Example:
```json
{
    "message": "Invalid email or password"
}
```

# User Profile Endpoint Documentation

## Endpoint
`GET /users/profile`

## Description
This endpoint allows an authenticated user to retrieve their profile information.

## Request Headers
The request should include the following header:

- `Authorization`: A valid JWT token (required).

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user's profile information.

Example:
```json
{
    "_id": "user_id_here",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "user@example.com",
    "socketId": null
}
```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing an error message.

Example:
```json
{
    "message": "Unauthorized"
}
```

# User Logout Endpoint Documentation

## Endpoint
`GET /users/logout`

## Description
This endpoint allows an authenticated user to log out and blacklist the token provided in cookie or headers.

## Request Headers
The request should include the following header:

- `Authorization`: A valid JWT token (required).

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing a success message.

Example:
```json
{
    "message": "Logged out successfully"
}
```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing an error message.

Example:
```json
{
    "message": "Unauthorized"
}
```

# Captain Registration Endpoint Documentation

## Endpoint
`POST /captains/register`

## Description
This endpoint allows a new captain to register by providing their full name, email, password, and vehicle details.

## Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
    - `firstname`: The captain's first name, at least 3 characters long (required).
    - `lastname`: The captain's last name, at least 3 characters long (optional).
- `email`: A valid email address (required).
- `password`: A password, at least 6 characters long (required).
- `vehicle`: An object containing:
    - `color`: The vehicle's color, at least 3 characters long (required).
    - `plate`: The vehicle's plate number, at least 3 characters long (required).
    - `capasity`: The vehicle's capacity, must be a number (required).
    - `vehicleType`: The type of vehicle, must be one of 'car', 'auto', or 'motorcycle' (required).

Example:
```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "captain@example.com",
    "password": "password123",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capasity": 4,
        "vehicleType": "car"
    }
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the captain's details.

Example:
```json
{
    "_id": "captain_id_here",
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capasity": 4,
        "vehicleType": "car"
    }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing an array of error messages.

Example:
```json
{
    "errors": [
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Please enter a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Color must be at least 3 characters long",
            "param": "vehicle.color",
            "location": "body"
        },
        {
            "msg": "Plate must be at least 3 characters long",
            "param": "vehicle.plate",
            "location": "body"
        },
        {
            "msg": "Capasity must be a number",
            "param": "vehicle.capasity",
            "location": "body"
        },
        {
            "msg": "Invalid vehicle type",
            "param": "vehicle.vehicleType",
            "location": "body"
        }
    ]
}
```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing an error message.

Example:
```json
{
    "error": "Please fill in all fields"
}
```


