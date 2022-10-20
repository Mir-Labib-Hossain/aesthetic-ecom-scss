FROM node
WORKDIR /app
COPY package.json .
RUN npm i 
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev","-- --host"]

# docker build -t aes .
# docker run -d -p 3000:3000 aes      or         docker run aes