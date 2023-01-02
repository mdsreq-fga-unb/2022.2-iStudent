FROM node:18
WORKDIR /usr/src/2022.2-iStudent
COPY package.json .
COPY ./dist ./dist
RUN npm install --omit=dev

COPY prisma .
COPY . .

RUN npx prisma generate
RUN npm run build