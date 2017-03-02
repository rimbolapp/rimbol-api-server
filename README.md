# rimbol-api-server

# test api

## GET /users

GET http://localhost:3000/users
### Request
```
```

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
  "id": 102
}
```


## GET /users/:name


GET http://localhost:3000/users/kun
### Request
```
```

### Response
```javascript
{
  "users": {
    "id": 123,
    "name": "kun"
  }
}
```


