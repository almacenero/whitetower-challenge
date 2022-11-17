FROM node:16.15.0-alpine
 
WORKDIR /app
 
ENV PATH /app/node_modules/.bin:$PATH
 
COPY package.json ./
 
RUN npm install -g @angular/cli
RUN npm install
 
 
CMD ["ng", "serve", "--host", "0.0.0.0"]