#!/bin/bash

# Find duplicate code patterns in the codebase
# This script helps identify:
# 1. Similar function signatures
# 2. Repeated React component patterns  
# 3. Duplicate utility functions
# 4. Similar JSX structures

echo "🔍 Analyzing codebase for duplicate code patterns..."
echo "📊 Duplicate Code Analysis Report"
echo "=="

# Check for similar function signatures
echo "🔍 Checking for similar function signatures..."
find src -name "*.tsx" -o -name "*.ts" | xargs grep -n "^export\|^function\|^const.*=" | \
  awk -F: '{print $3}' | sort | uniq -c | sort -nr | head -10 | \
  while read count signature; do
    if [[ $count -gt 5 && -n "$signature" ]]; then
      echo "ℹ️  Found $count similar signatures: $signature"
      echo "   💡 Consider extracting to shared utilities"
    fi
  done

# Count functions per file to identify complex files
find src -name "*.tsx" -o -name "*.ts" | while read file; do
  func_count=$(grep -c "^export\|^function\|^const.*=" "$file" 2>/dev/null || echo "0")
  if [[ $func_count -gt 5 ]]; then
    echo "ℹ️  $file has $func_count functions (consider splitting if too large)"
  fi
done

echo "🔍 Checking for similar React component patterns..."

# Analyze React component complexity
find src -name "*.tsx" | while read file; do
  # Count props, hooks, and JSX elements
  props_count=$(grep -c "^.*:.*" "$file" 2>/dev/null || echo "0")
  hooks_count=$(grep -c "use[A-Z]" "$file" 2>/dev/null || echo "0")  
  jsx_count=$(grep -c "<[A-Za-z]" "$file" 2>/dev/null || echo "0")
  
  # Calculate complexity score  
  complexity=$((props_count + hooks_count * 2 + jsx_count / 10))
  
  if [[ $complexity -gt 15 ]]; then
    echo "ℹ️  $file is complex: Props: $props_count, Hooks: $hooks_count, JSX: $jsx_count"
    echo "   💡 Consider breaking into smaller components"
  fi
done

echo "🔍 Checking for duplicate CSS patterns..."

# Find repeated Tailwind classes
if [ -f "src/app/globals.css" ]; then
  css_rules=$(grep -c "@" src/app/globals.css 2>/dev/null || echo "0")
  if [[ $css_rules -gt 3 ]]; then
    echo "📄 src/app/globals.css has $css_rules custom CSS rules"
    echo "   💡 Consider using Tailwind utilities instead of custom CSS"
  fi
fi

echo "🔍 Checking for import consolidation opportunities..."

# Find most imported modules
echo "📊 Most frequently imported modules:"
find src -name "*.tsx" -o -name "*.ts" | xargs grep "^import" | \
  cut -d' ' -f2- | sort | uniq -c | sort -nr | head -10 | \
  while read count import_line; do
    if [[ $count -gt 3 ]]; then
      echo "   🔄 $count times: import $import_line"
    fi
  done

echo ""
echo "🔍 Checking for large files..."
find src -name "*.tsx" -o -name "*.ts" | while read file; do
  lines=$(wc -l < "$file" 2>/dev/null || echo "0")
  if [[ $lines -gt 200 ]]; then
    echo "📄 $file: $(printf "%8d" $lines) lines (consider refactoring if too large)"
  fi
done

echo "🔍 Checking for repeated string literals..."
echo "📊 Frequently used string literals:"
find src -name "*.tsx" -o -name "*.ts" | xargs grep -ho '"[^"]\{10,\}"' | \
  sort | uniq -c | sort -nr | head -5 | \
  while read count literal; do
    if [[ $count -gt 3 ]]; then
      echo "   🔄 $count times: $literal"
      echo "      💡 Consider extracting to constants"
    fi
  done

echo ""
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
echo "=="
echo "✨ Duplicate code analysis complete!" 