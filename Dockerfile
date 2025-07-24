# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Validate CLI
RUN npx playwright --version

# Install Playwright with dependencies
RUN npx playwright install


# Copy rest of the project
COPY . .

# Optional: run specific test as default
CMD ["npx", "playwright", "test", "tests/Google.spec.js"]
