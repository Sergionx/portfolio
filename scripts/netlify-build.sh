#!/bin/bash
set -e

# Build the project
echo "Building project..."
npm run build

# Install Playwright Chromium
echo "Installing Playwright Chromium..."
npx playwright install chromium

# Start the preview server in the background
echo "Starting preview server..."
npm run preview -- --port 4173 --strictPort &
SERVER_PID=$!

# Wait for the server to start
echo "Waiting for server to be ready..."
sleep 10

# Generate OG Image
echo "Generating OG Image..."
node scripts/generate-og-image.mjs

# Kill the server
echo "Stopping preview server..."
kill $SERVER_PID
