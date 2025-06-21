#!/bin/bash

# =============================================================================
# Bundle Size Check Script
# =============================================================================
# Verifies that the Next.js bundle size stays within acceptable limits
# Usage: ./scripts/quality/check-bundle-size.sh

set -e

echo "🔍 Checking bundle size..."

# Build the project
npm run build > build-output.txt 2>&1

# Extract bundle size information
FIRST_LOAD_JS=$(grep "First Load JS" build-output.txt | head -1 | grep -o '[0-9]* kB' | head -1 | sed 's/ kB//')

if [ -z "$FIRST_LOAD_JS" ]; then
    echo "❌ Could not extract bundle size from build output"
    cat build-output.txt
    rm build-output.txt
    exit 1
fi

echo "📦 Current bundle size: ${FIRST_LOAD_JS}kB"

# Define thresholds
WARN_THRESHOLD=300
ERROR_THRESHOLD=500

# Check against thresholds
if [ "$FIRST_LOAD_JS" -gt "$ERROR_THRESHOLD" ]; then
    echo "🚨 ERROR: Bundle size ${FIRST_LOAD_JS}kB exceeds ${ERROR_THRESHOLD}kB limit!"
    echo "   Please optimize bundle size before proceeding."
    rm build-output.txt
    exit 1
elif [ "$FIRST_LOAD_JS" -gt "$WARN_THRESHOLD" ]; then
    echo "⚠️  WARNING: Bundle size ${FIRST_LOAD_JS}kB exceeds ${WARN_THRESHOLD}kB recommended limit"
    echo "   Consider optimizing for better performance."
    rm build-output.txt
    exit 0
else
    echo "✅ Bundle size ${FIRST_LOAD_JS}kB is within optimal range (<${WARN_THRESHOLD}kB)"
    rm build-output.txt
    exit 0
fi 