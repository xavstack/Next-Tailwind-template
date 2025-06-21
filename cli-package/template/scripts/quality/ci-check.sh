#!/bin/bash

# =============================================================================
# CI/CD Quality Check Script
# =============================================================================
# Comprehensive quality verification for continuous integration
# Usage: ./scripts/quality/ci-check.sh

set -e

echo "🚀 Starting CI/CD Quality Checks..."
echo "========================================"

# Function to check command availability
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo "❌ $1 is not installed"
        exit 1
    fi
}

# Function to run a check with status reporting
run_check() {
    local check_name="$1"
    local command="$2"
    
    echo ""
    echo "🔍 Running: $check_name"
    echo "----------------------------------------"
    
    if eval "$command"; then
        echo "✅ $check_name: PASSED"
    else
        echo "❌ $check_name: FAILED"
        exit 1
    fi
}

# Verify required tools
echo "🔧 Verifying tools..."
check_command "node"
check_command "npm"

# Check Node.js version
NODE_VERSION=$(node --version | sed 's/v//')
REQUIRED_VERSION="18.18.0"
echo "📋 Node.js version: $NODE_VERSION (required: >=$REQUIRED_VERSION)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm ci
fi

# Run quality checks
run_check "TypeScript Compilation" "npx tsc --noEmit"
run_check "ESLint" "npm run lint"
run_check "Prettier Check" "npm run format:check"
run_check "Jest Tests" "npm run test"
run_check "Next.js Build" "npm run build"

# Bundle size check
echo ""
echo "📦 Bundle Size Analysis"
echo "----------------------------------------"
./scripts/quality/check-bundle-size.sh

echo ""
echo "🎉 All CI/CD checks passed!"
echo "========================================"
echo "✅ TypeScript compilation"
echo "✅ Code linting (ESLint)"
echo "✅ Code formatting (Prettier)"
echo "✅ Unit tests (Jest)"
echo "✅ Production build"
echo "✅ Bundle size optimization"
echo ""
echo "🚀 Ready for deployment!" 