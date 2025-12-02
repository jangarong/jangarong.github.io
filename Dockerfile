# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY ./package*.json .

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application source code
COPY . .

# Build the application
ARG RESTRICTED_MODE=true
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS runner

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/static_dist ./static_dist

# Expose the port your Next.js app runs on (default: 3000)
EXPOSE 3000

RUN npm install serve

# Start the application
CMD ["npx", "serve", "static_dist"]
