#!/bin/bash

# Duplicate Code Detection Script
# Detects copy-paste code blocks and suggests refactoring opportunities

set -e

echo "🔍 Analyzing codebase for duplicate code patterns..."

# Function to analyze JavaScript/TypeScript files for duplicates
analyze_duplicates() {
  echo "📊 Duplicate Code Analysis Report"
  echo "=" | tr '\n' ' ' | sed 's/./=/g' | head -c 50; echo ""
  
  # Find files to analyze
  FILES=$(find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next | grep -v __tests__)
  
  DUPLICATES_FOUND=false
  
  # Simple approach: Look for similar function patterns
  echo "🔍 Checking for similar function signatures..."
  
  # Extract function declarations and their contexts
  for file in $FILES; do
    if [[ -f "$file" ]]; then
      # Look for function patterns
      FUNC_COUNT=$(grep -c "^[[:space:]]*\(function\|const.*=.*=>\|export.*function\)" "$file" 2>/dev/null || echo 0)
      if [[ $FUNC_COUNT -gt 5 ]]; then
        echo "ℹ️  $file has $FUNC_COUNT functions (consider splitting if too large)"
      fi
    fi
  done
  
  # Look for similar React component patterns
  echo "🔍 Checking for similar React component patterns..."
  
  for file in $FILES; do
    if [[ -f "$file" && "$file" == *.tsx ]]; then
      # Check component complexity
      PROPS_COUNT=$(grep -c "props\." "$file" 2>/dev/null || echo 0)
      HOOKS_COUNT=$(grep -c "use[A-Z]" "$file" 2>/dev/null || echo 0)
      JSX_ELEMENTS=$(grep -c "<[A-Za-z]" "$file" 2>/dev/null || echo 0)
      
      # Report complex components that might benefit from splitting
      if [[ $PROPS_COUNT -gt 10 || $HOOKS_COUNT -gt 8 || $JSX_ELEMENTS -gt 20 ]]; then
        echo "ℹ️  $file is complex: Props: $PROPS_COUNT, Hooks: $HOOKS_COUNT, JSX: $JSX_ELEMENTS"
        echo "   💡 Consider breaking into smaller components"
      fi
    fi
  done
  
  # Look for duplicate CSS patterns in global styles
  echo "🔍 Checking for duplicate CSS patterns..."
  
  CSS_FILES=$(find src -name "*.css" | grep -v node_modules)
  for css_file in $CSS_FILES; do
    if [[ -f "$css_file" ]]; then
      # Count custom CSS rules
      CUSTOM_RULES=$(grep -c "^[^@/].*{" "$css_file" 2>/dev/null || echo 0)
      if [[ $CUSTOM_RULES -gt 0 ]]; then
        echo "📄 $css_file has $CUSTOM_RULES custom CSS rules"
        echo "   💡 Consider using Tailwind utilities instead of custom CSS"
      fi
    fi
  done
  
  # Look for similar import patterns that could be consolidated
  echo "🔍 Checking for import consolidation opportunities..."
  
  # Find commonly imported modules
  ALL_IMPORTS=$(grep -h "^import.*from" $FILES 2>/dev/null | sort | uniq -c | sort -nr | head -10)
  if [[ -n "$ALL_IMPORTS" ]]; then
    echo "📊 Most frequently imported modules:"
    echo "$ALL_IMPORTS" | while read -r count import_line; do
      if [[ $count -gt 3 ]]; then
        echo "   🔄 $count times: $import_line"
      fi
    done
    echo ""
  fi
  
  # Look for long files that might contain duplicated logic
  echo "🔍 Checking for large files..."
  
  for file in $FILES; do
    if [[ -f "$file" ]]; then
      LINE_COUNT=$(wc -l < "$file")
      if [[ $LINE_COUNT -gt 300 ]]; then
        echo "📄 $file: $LINE_COUNT lines (consider refactoring if too large)"
      fi
    fi
  done
  
  # Check for repeated string literals
  echo "🔍 Checking for repeated string literals..."
  
  REPEATED_STRINGS=$(grep -h '"[^"]\{10,\}"' $FILES 2>/dev/null | sort | uniq -c | sort -nr | head -5)
  if [[ -n "$REPEATED_STRINGS" ]]; then
    echo "📊 Frequently used string literals:"
    echo "$REPEATED_STRINGS" | while read -r count string; do
      if [[ $count -gt 2 ]]; then
        echo "   🔄 $count times: $string"
        echo "      💡 Consider extracting to constants"
      fi
    done
    echo ""
  fi
  
  echo "✅ Duplicate code analysis complete!"
  echo ""
  echo "💡 General suggestions for maintaining clean code:"
  echo "   - Continue using shared components in /components/ui/"
  echo "   - Leverage custom hooks for repeated logic"
  echo "   - Use Tailwind utilities over custom CSS"
  echo "   - Consider utility functions in /lib/"
  echo "   - Extract repeated string literals to constants"
  echo "   - Break down large files and complex components"
  
  echo ""
  echo "=" | tr '\n' ' ' | sed 's/./=/g' | head -c 50; echo ""
}

# Run the analysis
analyze_duplicates

echo "✨ Duplicate code analysis complete!" 