#!/bin/bash

# Exit on any error
set -e

# Print current directory and node info
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Clean install of dependencies
echo "Installing dependencies..."
npm ci || npm install

# Build the React app
echo "Building React app..."
npm run build

echo "Build complete! The 'build' folder is ready for deployment."