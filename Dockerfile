FROM mcr.microsoft.com/playwright:v1.42.0-jammy

WORKDIR /app

# Copy ONLY package files first (optimizes caching)
COPY package*.json ./

# Install dependencies (including Playwright)
RUN npm install

# Copy the rest of the project
COPY . .

# Run tests (using npx to avoid path issues)
CMD ["npx", "playwright", "test","Google.spec.js"]

