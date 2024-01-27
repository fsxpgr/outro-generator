FROM node:18-alpine

WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn
COPY . .

EXPOSE 3000
CMD ["yarn", "dev"]
