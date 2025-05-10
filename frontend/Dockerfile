FROM node:22-alpine as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

# COPY yarn.lock ./

RUN npm ci

# RUN yarn install --frozen-lockfile

COPY . .
# RUN yarn build

EXPOSE 3000

CMD ["npm", "start"]
