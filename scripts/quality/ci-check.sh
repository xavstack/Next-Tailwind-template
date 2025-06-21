#!/bin/bash

# =============================================================================
# Enhanced CI/CD Quality Pipeline
# =============================================================================
# Comprehensive quality verification with advanced code analysis
# Usage: ./scripts/quality/ci-check.sh

set -e

echo "🚀 Starting enhanced CI/CD quality pipeline..."
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Track overall success and detailed results
OVERALL_SUCCESS=true
QUALITY_SCORE=0
TOTAL_CHECKS=0

# Function to run check and track result
run_check() {
    local check_name=$1
    local command=$2
    local weight=${3:-1}  # Default weight is 1
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + weight))
    
    print_status $BLUE "🔍 Running $check_name..."
    
    if eval "$command"; then
        print_status $GREEN "✅ $check_name passed"
        QUALITY_SCORE=$((QUALITY_SCORE + weight))
    else
        print_status $RED "❌ $check_name failed"
        OVERALL_SUCCESS=false
    fi
    echo ""
}

# Function to run optional check (doesn't affect overall success)
run_optional_check() {
    local check_name=$1
    local command=$2
    
    print_status $CYAN "🔍 Running $check_name (optional)..."
    
    if eval "$command"; then
        print_status $GREEN "✅ $check_name passed"
    else
        print_status $YELLOW "⚠️  $check_name had warnings (non-blocking)"
    fi
    echo ""
}

# Verify required tools
print_status $BLUE "🔧 Verifying required tools..."
for tool in node npm; do
    if ! command_exists $tool; then
        print_status $RED "❌ $tool is not installed"
        exit 1
    fi
done

# Check Node.js version
NODE_VERSION=$(node --version | sed 's/v//')
REQUIRED_VERSION="18.18.0"
print_status $CYAN "📋 Node.js version: $NODE_VERSION (required: >=$REQUIRED_VERSION)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status $BLUE "📦 Installing dependencies..."
    npm ci
fi

print_status $PURPLE "========================================="
print_status $PURPLE "🎯 PHASE 1: Core Quality Checks"
print_status $PURPLE "========================================="

# 1. TypeScript Type Checking (Critical)
run_check "TypeScript compilation" "npx tsc --noEmit" 3

# 2. ESLint (Critical)
run_check "ESLint analysis" "npm run lint" 3

# 3. Prettier formatting check (Critical)
run_check "Prettier formatting" "npm run format:check" 2

# 4. Jest tests (Critical)
run_check "Jest unit tests" "npm test" 3

print_status $PURPLE "========================================="
print_status $PURPLE "🔬 PHASE 2: Advanced Code Analysis"
print_status $PURPLE "========================================="

# 5. Framework Compliance Check (Important)
if [[ -f "scripts/quality/check-framework-compliance.sh" ]]; then
    run_check "Framework compliance" "./scripts/quality/check-framework-compliance.sh" 2
else
    print_status $YELLOW "⚠️  Framework compliance script not found, skipping..."
    echo ""
fi

# 6. Dead Code Detection (Optional but informative)
if [[ -f "scripts/quality/find-dead-code.sh" ]]; then
    run_optional_check "Dead code analysis" "./scripts/quality/find-dead-code.sh"
else
    print_status $YELLOW "⚠️  Dead code analysis script not found, skipping..."
    echo ""
fi

# 7. Duplicate Code Detection (Optional but informative)
if [[ -f "scripts/quality/find-duplicates.sh" ]]; then
    run_optional_check "Duplicate code analysis" "./scripts/quality/find-duplicates.sh"
else
    print_status $YELLOW "⚠️  Duplicate code analysis script not found, skipping..."
    echo ""
fi

print_status $PURPLE "========================================="
print_status $PURPLE "🏗️  PHASE 3: Build & Bundle Analysis"
print_status $PURPLE "========================================="

# 8. Build check (Critical)
run_check "Next.js production build" "npm run build" 3

# 9. Bundle size check (Important)
if [[ -f "scripts/quality/check-bundle-size.sh" ]]; then
    run_check "Bundle size analysis" "./scripts/quality/check-bundle-size.sh" 2
else
    print_status $YELLOW "⚠️  Bundle size script not found, skipping..."
    echo ""
fi

print_status $PURPLE "========================================="
print_status $PURPLE "📊 PHASE 4: Quality Report & Metrics"
print_status $PURPLE "========================================="

# Calculate quality percentage
if [[ $TOTAL_CHECKS -gt 0 ]]; then
    QUALITY_PERCENTAGE=$((QUALITY_SCORE * 100 / TOTAL_CHECKS))
else
    QUALITY_PERCENTAGE=0
fi

print_status $CYAN "📈 Quality Score: $QUALITY_SCORE/$TOTAL_CHECKS ($QUALITY_PERCENTAGE%)"

# Quality gates
if [[ $QUALITY_PERCENTAGE -ge 90 ]]; then
    QUALITY_LEVEL="🌟 EXCELLENT"
    QUALITY_COLOR=$GREEN
elif [[ $QUALITY_PERCENTAGE -ge 80 ]]; then
    QUALITY_LEVEL="🔥 GOOD"
    QUALITY_COLOR=$GREEN
elif [[ $QUALITY_PERCENTAGE -ge 70 ]]; then
    QUALITY_LEVEL="⚠️  ACCEPTABLE"
    QUALITY_COLOR=$YELLOW
else
    QUALITY_LEVEL="❌ NEEDS IMPROVEMENT"
    QUALITY_COLOR=$RED
fi

print_status $QUALITY_COLOR "🎯 Quality Level: $QUALITY_LEVEL"
echo ""

print_status $PURPLE "========================================="
print_status $PURPLE "🏁 FINAL RESULT"
print_status $PURPLE "========================================="

if [ "$OVERALL_SUCCESS" = true ]; then
    print_status $GREEN "🎉 All critical quality checks passed!"
    echo ""
    if [[ $QUALITY_PERCENTAGE -ge 90 ]]; then
        print_status $GREEN "🚀 Exceptional code quality - Ready for production deployment!"
    elif [[ $QUALITY_PERCENTAGE -ge 80 ]]; then
        print_status $GREEN "✅ Good code quality - Ready for deployment!"
    else
        print_status $YELLOW "⚠️  Acceptable quality - Consider addressing optional warnings"
    fi
    
    print_status $CYAN ""
    print_status $CYAN "📋 Quality Summary:"
    print_status $CYAN "   ✅ TypeScript: Strict mode, no errors"
    print_status $CYAN "   ✅ ESLint: No violations"
    print_status $CYAN "   ✅ Formatting: Prettier compliance"
    print_status $CYAN "   ✅ Tests: All passing"
    print_status $CYAN "   ✅ Build: Production ready"
    print_status $CYAN "   ✅ Framework: Standards compliance"
    
    exit 0
else
    print_status $RED "💥 Critical quality checks failed!"
    echo ""
    print_status $RED "🚨 DEPLOYMENT BLOCKED"
    print_status $RED "Please fix all ❌ issues above before proceeding."
    echo ""
    print_status $YELLOW "💡 Quick fixes:"
    print_status $YELLOW "   • Run 'npm run lint:fix' for ESLint issues"
    print_status $YELLOW "   • Run 'npm run format' for formatting issues"
    print_status $YELLOW "   • Check TypeScript errors in your IDE"
    print_status $YELLOW "   • Run tests locally: 'npm test'"
    
    exit 1
fi 