FROM node:lts-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app

ENV VITE_API_URL=http://85.215.134.78:8000
ENV VITE_API_KEY=xxx

RUN npm run build
EXPOSE 3000
CMD ["node", "build/index.js"]