# refresh-Token-Demo
## refresh token very sample
## create with https://expressjs.com/en/starter/generator.html

### install
```
npm install
```

### run
```
npm start
```

### run on docker
```
docker build .
docker images -a
docker run -p 3000:3000 -i -t e873da77a4f0
```

## user
```shell
"email": "admin@admin.com"
"password": "pwd12345"
```

```shell
"email": "manh@admin.com"
"password": "123456"
```

## api

### login
```
curl -H "Host: localhost:3000" -H "User-Agent: okhttp/5.0.0-alpha.10" --data "email=admin%40admin.com&password=pwd12345" --compressed "http://localhost:3000/login"
```

### user
```
curl -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY1ODk5MzI5MSwiZXhwIjoxNjU4OTkzMzUxfQ.2U4DTv5F87jGfgDJXtcFR6olkHpNPdyR1kGYndLLBo8" -H "Host: localhost:3000" -H "User-Agent: okhttp/5.0.0-alpha.10" --compressed "http://localhost:3000/user"
```

### refreshToken
```
curl -H "Host: localhost:3000" -H "User-Agent: okhttp/5.0.0-alpha.10" --data "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY1ODk5MzI5MSwiZXhwIjoxNjU4OTkzNDcxfQ.CvOuUQ7C4iGeHXYVL6dLEOCkIvu4r-zsT7KkpxcTkZc" --compressed "http://localhost:3000/refreshToken"
```

### paging
```
curl -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY1ODk5MzI5MSwiZXhwIjoxNjU4OTkzMzUxfQ.2U4DTv5F87jGfgDJXtcFR6olkHpNPdyR1kGYndLLBo8" -H "Host: localhost:3000" -H "User-Agent: okhttp/5.0.0-alpha.10" --compressed "http://localhost:3000/paging?page=1&sort=ascending"
```

### token expired in 1 minute and refresh token expired in 3 minute
