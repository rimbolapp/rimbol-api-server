# rimbol-api-server

# test api

## GET /users

GET http://localhost:3000/users
### Request
nothing

### Response
```javascript
{
  "users": [
    {
      "id": 101,
      "name": "kun"
    },
    {
      "id": 102,
      "name": "hyeon"
    }
  ]
}
```

## POST /users

POST http://localhost:3000/users
### Request
```javascript
{
  "name": "lee"
}
```

### Response
```javascript
{
  "id": 103,
  "name": "lee"
}
```


## GET /users/:id


GET http://localhost:3000/users/101
### Request
nothing

### Response
```javascript
{
  "users": {
    "id": 101,
    "name": "kun"
  }
}
```


