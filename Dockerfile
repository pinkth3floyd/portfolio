FROM node

# Update the package lists
# RUN apt-get update && apt-get upgrade
# RUN apt-get install nodejs -y
# RUN apt-get install npm -y
WORKDIR /app

COPY package*.json /app
RUN npm install
COPY . .
RUN npm run build


