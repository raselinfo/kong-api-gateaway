# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npx prisma generate


# Expose a port (e.g., 3000) that the application will listen on
EXPOSE 4005

# Define the command to run your application
CMD ["node", "index.js"]
