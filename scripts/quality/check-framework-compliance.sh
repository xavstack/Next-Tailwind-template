#!/bin/bash

# Framework Compliance Checker
# Detects custom CSS outside Tailwind utilities, non-standard patterns, and framework violations

set -e

echo "🔍 Checking framework compliance and coding standards..."

VIOLATIONS_FOUND=false
COMPLIANCE_SCORE=100

# Function to report violation
report_violation() {
  local severity=$1
  local file=$2
  local line=$3
  local message=$4
  local suggestion=$5
  
  VIOLATIONS_FOUND=true
  
  case $severity in
    "ERROR")
      echo "❌ ERROR: $message"
      COMPLIANCE_SCORE=$((COMPLIANCE_SCORE - 10))
      ;;
    "WARNING")
      echo "⚠️  WARNING: $message"
      COMPLIANCE_SCORE=$((COMPLIANCE_SCORE - 5))
      ;;
    "INFO")
      echo "ℹ️  INFO: $message"
      COMPLIANCE_SCORE=$((COMPLIANCE_SCORE - 1))
      ;;
  esac
  
  echo "   📄 $file:$line"
  if [[ -n "$suggestion" ]]; then
    echo "   💡 Suggestion: $suggestion"
  fi
  echo ""
}

echo "📊 Framework Compliance Report"
echo "=" | tr '\n' ' ' | sed 's/./=/g' | head -c 50; echo ""

# 1. Check for custom CSS outside Tailwind utilities
echo "🎨 Checking CSS compliance..."

# Check global CSS file for non-utility classes
if [[ -f "src/app/globals.css" ]]; then
  # Look for custom CSS classes (not @tailwind, :root, or standard resets)
  CUSTOM_CSS=$(grep -n "^\." "src/app/globals.css" 2>/dev/null | grep -v "@apply" || true)
  
  if [[ -n "$CUSTOM_CSS" ]]; then
    while IFS= read -r line; do
      line_num=$(echo "$line" | cut -d: -f1)
      css_rule=$(echo "$line" | cut -d: -f2-)
      report_violation "WARNING" "src/app/globals.css" "$line_num" \
        "Custom CSS class detected: $css_rule" \
        "Consider using Tailwind utilities or @apply directive"
    done <<< "$CUSTOM_CSS"
  fi
fi

# Check for inline styles in components
echo "🔍 Checking for inline styles..."
TSX_FILES=$(find src -name "*.tsx" -o -name "*.ts" | grep -v node_modules)

for file in $TSX_FILES; do
  if [[ -f "$file" ]]; then
    # Look for style= attributes
    INLINE_STYLES=$(grep -n "style=" "$file" 2>/dev/null || true)
    if [[ -n "$INLINE_STYLES" ]]; then
      while IFS= read -r line; do
        line_num=$(echo "$line" | cut -d: -f1)
        report_violation "ERROR" "$file" "$line_num" \
          "Inline styles detected" \
          "Use Tailwind CSS classes instead of inline styles"
      done <<< "$INLINE_STYLES"
    fi
    
    # Look for CSS-in-JS patterns (styled-components, emotion, etc.)
    CSS_IN_JS=$(grep -n "styled\." "$file" 2>/dev/null || true)
    if [[ -n "$CSS_IN_JS" ]]; then
      while IFS= read -r line; do
        line_num=$(echo "$line" | cut -d: -f1)
        report_violation "ERROR" "$file" "$line_num" \
          "CSS-in-JS library usage detected" \
          "Use Tailwind CSS classes for consistent styling"
      done <<< "$CSS_IN_JS"
    fi
  fi
done

# 2. Check TypeScript strict mode compliance
echo "📝 Checking TypeScript compliance..."

if [[ -f "tsconfig.json" ]]; then
  # Check if strict mode is enabled
  STRICT_MODE=$(grep -c '"strict": true' "tsconfig.json" 2>/dev/null || echo 0)
  if [[ $STRICT_MODE -eq 0 ]]; then
    report_violation "ERROR" "tsconfig.json" "1" \
      "TypeScript strict mode is not enabled" \
      "Enable 'strict': true in tsconfig.json"
  fi
fi

# Check for any TypeScript violations
for file in $TSX_FILES; do
  if [[ -f "$file" ]]; then
    # Look for any types
    ANY_TYPES=$(grep -n ": any" "$file" 2>/dev/null || true)
    if [[ -n "$ANY_TYPES" ]]; then
      while IFS= read -r line; do
        line_num=$(echo "$line" | cut -d: -f1)
        report_violation "WARNING" "$file" "$line_num" \
          "TypeScript 'any' type usage" \
          "Use specific types instead of 'any'"
      done <<< "$ANY_TYPES"
    fi
    
    # Look for console.log statements
    CONSOLE_LOGS=$(grep -n "console\.log" "$file" 2>/dev/null || true)
    if [[ -n "$CONSOLE_LOGS" ]]; then
      while IFS= read -r line; do
        line_num=$(echo "$line" | cut -d: -f1)
        report_violation "WARNING" "$file" "$line_num" \
          "Console.log statement found" \
          "Remove console.log statements from production code"
      done <<< "$CONSOLE_LOGS"
    fi
  fi
done

# 3. Check Next.js App Router compliance
echo "🚀 Checking Next.js App Router compliance..."

# Check if using Pages Router (should use App Router)
if [[ -d "pages" ]]; then
  report_violation "ERROR" "pages" "1" \
    "Pages Router directory detected" \
    "This project should use App Router (src/app/). Migrate from Pages Router."
fi

# Check for proper file organization
if [[ ! -d "src/app" ]]; then
  report_violation "ERROR" "." "1" \
    "App Router directory not found" \
    "Create src/app/ directory for App Router structure"
fi

# Check for proper API route structure
API_ROUTES=$(find src/app -name "route.ts" -o -name "route.js" 2>/dev/null || true)
OLD_API_ROUTES=$(find src -name "api" -type d | grep -v "src/app/api" 2>/dev/null || true)

if [[ -n "$OLD_API_ROUTES" ]]; then
  report_violation "WARNING" "$OLD_API_ROUTES" "1" \
    "API routes outside App Router structure" \
    "Move API routes to src/app/api/ directory"
fi

# 4. Check component organization
echo "🧩 Checking component organization..."

# Check if components are properly organized
if [[ ! -d "src/components/ui" ]]; then
  report_violation "WARNING" "src/components" "1" \
    "UI components directory not found" \
    "Create src/components/ui/ for shadcn/ui components"
fi

# Check for components in wrong locations
MISPLACED_COMPONENTS=$(find src/app -name "*.tsx" | grep -v "page.tsx\|layout.tsx\|loading.tsx\|error.tsx\|not-found.tsx" 2>/dev/null || true)

if [[ -n "$MISPLACED_COMPONENTS" ]]; then
  for component in $MISPLACED_COMPONENTS; do
    report_violation "INFO" "$component" "1" \
      "Component in app directory" \
      "Consider moving reusable components to src/components/"
  done
fi

# 5. Check import conventions
echo "📦 Checking import conventions..."

for file in $TSX_FILES; do
  if [[ -f "$file" ]]; then
    # Check for relative imports that could use path mapping
    DEEP_IMPORTS=$(grep -n "import.*\.\./\.\./\.\." "$file" 2>/dev/null || true)
    if [[ -n "$DEEP_IMPORTS" ]]; then
      while IFS= read -r line; do
        line_num=$(echo "$line" | cut -d: -f1)
        report_violation "INFO" "$file" "$line_num" \
          "Deep relative import detected" \
          "Use @/ path mapping for cleaner imports"
      done <<< "$DEEP_IMPORTS"
    fi
  fi
done

# 6. Check for banned dependencies
echo "🚫 Checking for banned dependencies..."

if [[ -f "package.json" ]]; then
  # Check for banned CSS frameworks
  BANNED_CSS=$(grep -E "bootstrap|bulma|foundation" "package.json" 2>/dev/null || true)
  if [[ -n "$BANNED_CSS" ]]; then
    report_violation "ERROR" "package.json" "1" \
      "Banned CSS framework detected" \
      "Remove Bootstrap/Bulma/Foundation - use Tailwind CSS only"
  fi
  
  # Check for axios (should use SWR + fetch)
  AXIOS_USAGE=$(grep "axios" "package.json" 2>/dev/null || true)
  if [[ -n "$AXIOS_USAGE" ]]; then
    report_violation "WARNING" "package.json" "1" \
      "Axios detected" \
      "Use SWR with native fetch (lib/fetcher.ts) instead of axios"
  fi
  
  # Check for styled-components or other CSS-in-JS
  CSS_IN_JS_LIBS=$(grep -E "styled-components|emotion|@emotion" "package.json" 2>/dev/null || true)
  if [[ -n "$CSS_IN_JS_LIBS" ]]; then
    report_violation "ERROR" "package.json" "1" \
      "CSS-in-JS library detected" \
      "Remove CSS-in-JS libraries - use Tailwind CSS only"
  fi
fi

# 7. Generate AI Agent Tracking Header
echo "🤖 Checking AI generation tracking..."

AI_GENERATED_FILES=$(find src -name "*.ts" -o -name "*.tsx" | xargs grep -l "Generated by.*AI\|Created by.*Cursor\|AI-generated" 2>/dev/null || true)

if [[ -n "$AI_GENERATED_FILES" ]]; then
  echo "📊 AI-generated files detected:"
  for file in $AI_GENERATED_FILES; do
    echo "   🤖 $file"
  done
  echo ""
fi

# Final compliance score
echo "📊 Framework Compliance Score: ${COMPLIANCE_SCORE}/100"
echo ""

if [[ "$VIOLATIONS_FOUND" == "false" ]]; then
  echo "✅ Framework compliance check passed!"
  echo ""
  echo "🎉 Your codebase follows all framework conventions:"
  echo "   ✅ Tailwind CSS utilities only"
  echo "   ✅ TypeScript strict mode"
  echo "   ✅ Next.js App Router structure"
  echo "   ✅ Proper component organization"
  echo "   ✅ Clean import conventions"
  echo "   ✅ No banned dependencies"
else
  echo "❌ Framework compliance issues detected!"
  echo ""
  echo "📋 Compliance Summary:"
  echo "   - Review the violations above"
  echo "   - Fix ERROR level issues immediately"
  echo "   - Address WARNING level issues soon"
  echo "   - Consider INFO level suggestions"
  
  if [[ $COMPLIANCE_SCORE -lt 80 ]]; then
    echo ""
    echo "🚨 CRITICAL: Compliance score below 80/100"
    echo "   Immediate attention required for framework standards"
    exit 1
  fi
fi

echo ""
echo "=" | tr '\n' ' ' | sed 's/./=/g' | head -c 50; echo ""
echo "✨ Framework compliance check complete!" 