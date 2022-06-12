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
curl --location --request POST 'http://localhost:3000/login' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=manh@admin.com' \
--data-urlencode 'password=123456'
```

### user
```
curl --location --request GET 'http://localhost:3000/user' \
--header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmhAYWRtaW4uY29tIiwiaWF0IjoxNjU0OTY2Nzg3LCJleHAiOjE2NTQ5NjY4NDd9.ZD9aqMva0SPPMS304fpGlFfadV3hYOpm6CJy32VO7Dc'
```

### refreshToken
```
curl --location --request POST 'http://localhost:3000/refreshToken' \
--header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoicHdkMTIzNDUiLCJpYXQiOjE2NTQ5MjQ4NDgsImV4cCI6MTY1NDkyNDkwOH0.-IwNVOM-1i3QMF8PJ9VdL8b-kbMZfK4789jXrTaf3jQ' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmhAYWRtaW4uY29tIiwiaWF0IjoxNjU0OTY2NzA3LCJleHAiOjE2NTQ5NjY4ODd9.kt6Jrl_VroU7FQJHPvFfpOZT4DT7FO_Ai4qGpCzX44Y'
```

### paging
```
curl --location --request GET 'http://localhost:3000/paging?page=1' \
--header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmhAYWRtaW4uY29tIiwiaWF0IjoxNjU1MDA0OTgzLCJleHAiOjE2NTUwMDUwNDN9.C1IWArx7RTqYI0OOhYsowspxcc3VG_-LwGUj698AXyI'
```

### token expired in 1 minute and refresh token expired in 3 minute
