FROM node:22-alpine as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY yarn.lock ./

# RUN npm ci

RUN yarn install

COPY . .
# RUN yarn build

EXPOSE 5173

CMD ["yarn", "run", "dev", "--host"]
