# Microsoft's pre-configured image with all dependencies
FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

# Copy package files first
COPY package.json package-lock.json* ./

# Install npm dependencies
RUN npm install

# Copy application code
COPY . .

# Run tests
CMD ["npx", "playwright", "test", "tests/Google.spec.js"]