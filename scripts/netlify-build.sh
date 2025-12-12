#!/bin/bash
set -e

SERVER_PID=""

# Function to cleanup background processes
cleanup() {
  echo "Cleaning up..."
  # Disable exit on error for cleanup to prevent build failure during cleanup
  set +e
  if [ -n "$SERVER_PID" ]; then
    kill $SERVER_PID >/dev/null 2>&1 || true
  fi
  # Force kill any lingering vite processes
  pkill -f "vite" >/dev/null 2>&1 || true
}

# Trap exit signals to ensure cleanup
trap cleanup EXIT

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
for i in {1..30}; do
  if curl -s http://localhost:4173/ >/dev/null; then
    echo "Preview server is up!"
    break
  fi
  echo "Waiting for preview server... ($i/30)"
  sleep 1
done

# Generate OG Image
echo "Generating OG Image..."
node scripts/generate-og-image.mjs

echo "Build script finished successfully."
exit 0
