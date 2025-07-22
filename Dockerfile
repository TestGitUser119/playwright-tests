FROM mcr.microsoft.com/playwright:v1.42.1-jammy

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# ✅ Add this line to make node_modules binaries executable
RUN chmod -R +x node_modules/.bin

CMD ["npx", "playwright", "test"]
