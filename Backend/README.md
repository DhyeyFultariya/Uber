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


