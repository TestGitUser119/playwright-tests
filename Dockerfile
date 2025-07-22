# Use the official Playwright base image (includes Node + browsers)
FROM mcr.microsoft.com/playwright:v1.45.0-jammy

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and lock file first (to cache npm install)
COPY package.json package-lock.json* ./

# Install dependencies (clean and reliable)
RUN npm ci

# Copy all remaining project files
COPY . .

# Run the Playwright tests
CMD ["npx", "playwright", "test"]
