# Stage 1: Build
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY ./web/jangarong.github.io/package*.json .
COPY ./storage/jangarong.github.io/log/assets /app/public/assets/b/log
COPY ./storage/jangarong.github.io/log/posts /app/posts

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application source code
COPY ./web/jangarong.github.io .

ENV RESTRICTED_MODE=true

# Expose the port your Next.js app runs on (default: 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
