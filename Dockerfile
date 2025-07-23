FROM mcr.microsoft.com/playwright:v1.42.1-jammy

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Install browsers
RUN npx playwright install --with-deps

COPY . .

# Make binaries executable
RUN chmod -R +x node_modules/.bin

# Run a specific test by name
CMD ["npx", "playwright", "test", "--grep", "Google.spec.js"]
