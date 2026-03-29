#!/bin/bash

# Exit on any error  
set -e

echo "================================"
echo "Azure Linux Web App Deployment"
echo "================================"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Clean install
echo "Installing dependencies..."
rm -rf node_modules package-lock.json
npm install --production=false

# Build
echo "Building React app..."
npm run build

echo ""
echo "================================"
echo "Build Complete!"
echo "Starting application server..."
echo "================================"

# Start the app
npm run start:prod