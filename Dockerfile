# Build stage
FROM node:20-alpine as builder

# Build arg to determine environment
ARG ENV=prod
ENV VITE_ENV=$ENV

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN if [ "$ENV" = "prod" ] ; then \
        npm run build:prod ; \
    else \
        npm run build:dev ; \
    fi

# Production stage
FROM nginx:alpine

# Copy nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
