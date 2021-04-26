docker rm poketype --force
docker build --tag poketype:latest .
#docker run -p 8008:8008 -d --name poketype poketype:latest
docker run -d -e VIRTUAL_HOST=poketype.ryanbuxton.com -e LETSENCRYPT_HOST=poketype.ryanbuxton.com --network=webproxy --name poketype poketype:latest
