docker build -t service:prod -f Dockerfile.prod .
docker-compose -f docker-compose.prod.yml up -d 