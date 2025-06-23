#!/bin/bash

# Enhanced Bundle Size Check Script for Next.js Template
# Checks bundle sizes and fails if they exceed reasonable limits

set -e

echo "🔍 Running bundle size analysis..."

# Build the project to get fresh bundle sizes
echo "📦 Building project for bundle analysis..."
npm run build > /dev/null 2>&1

# Define size limits (in kB)
MAX_MAIN_BUNDLE_SIZE=250
MAX_PAGE_BUNDLE_SIZE=150
MAX_TOTAL_JS_SIZE=400

# Extract bundle sizes from Next.js build output
echo "📊 Analyzing bundle sizes..."

# Run build again to capture output
BUILD_OUTPUT=$(npm run build 2>&1)

# Extract main bundle size (from the main route /)
MAIN_BUNDLE_SIZE=$(echo "$BUILD_OUTPUT" | grep -E "┌ ○ /" | grep -oE "[0-9]+(\.[0-9]+)? kB" | head -1 | grep -oE "[0-9]+(\.[0-9]+)?")

# Extract First Load JS size (from the main route /)
FIRST_LOAD_SIZE=$(echo "$BUILD_OUTPUT" | grep -E "┌ ○ /" | grep -oE "[0-9]+(\.[0-9]+)? kB" | tail -1 | grep -oE "[0-9]+(\.[0-9]+)?")

# Check if we got valid sizes
if [ -z "$MAIN_BUNDLE_SIZE" ] || [ -z "$FIRST_LOAD_SIZE" ]; then
    echo "❌ Could not extract bundle sizes from build output"
    echo "Build output:"
    echo "$BUILD_OUTPUT"
    exit 1
fi

echo "📈 Bundle Size Analysis:"
echo "  Main Bundle: ${MAIN_BUNDLE_SIZE} kB"
echo "  First Load JS: ${FIRST_LOAD_SIZE} kB"

# Convert to integers for comparison (remove decimal points)
MAIN_SIZE_INT=$(echo "$MAIN_BUNDLE_SIZE" | cut -d. -f1)
FIRST_LOAD_INT=$(echo "$FIRST_LOAD_SIZE" | cut -d. -f1)

# Check main bundle size
if [ "$MAIN_SIZE_INT" -gt "$MAX_MAIN_BUNDLE_SIZE" ]; then
    echo "❌ Main bundle size (${MAIN_BUNDLE_SIZE} kB) exceeds limit (${MAX_MAIN_BUNDLE_SIZE} kB)"
    exit 1
fi

# Check first load JS size
if [ "$FIRST_LOAD_INT" -gt "$MAX_TOTAL_JS_SIZE" ]; then
    echo "❌ First Load JS size (${FIRST_LOAD_SIZE} kB) exceeds limit (${MAX_TOTAL_JS_SIZE} kB)"
    exit 1
fi

echo "✅ Bundle sizes are within acceptable limits"

# Check for suspicious large chunks
echo "🔍 Checking for large chunks..."
LARGE_CHUNKS=$(echo "$BUILD_OUTPUT" | grep -E "[0-9]+(\.[0-9]+)? kB" | grep -oE "[0-9]+(\.[0-9]+)? kB" | while read chunk; do
    size=$(echo "$chunk" | grep -oE "[0-9]+(\.[0-9]+)?")
    size_int=$(echo "$size" | cut -d. -f1)
    if [ "$size_int" -gt 100 ]; then
        echo "⚠️  Large chunk detected: ${chunk}"
    fi
done)

if [ -n "$LARGE_CHUNKS" ]; then
    echo "$LARGE_CHUNKS"
    echo "💡 Consider code splitting for chunks over 100kB"
fi

# Generate bundle analysis report if requested
if [ "$1" = "--analyze" ]; then
    echo "📊 Generating detailed bundle analysis..."
    npm run analyze > /dev/null 2>&1
    echo "✅ Bundle analysis report generated"
    echo "📂 Open .next/analyze/client.html to view detailed analysis"
fi

echo "🎯 Bundle size check completed successfully" 