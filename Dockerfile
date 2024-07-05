FROM node:20.15-alpine3.19
WORKDIR /app
RUN npm install -g serve
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD serve -s dist -l 3000

# docker build -t elrecipiente/tests-e2e-playwright .
# docker run -p 3000:3000
# docker push elrecipiente/demo:version-1