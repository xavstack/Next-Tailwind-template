#!/bin/bash

# Template AI Guidance Setup Script
# Makes AI assistance part of the natural development workflow

set -e

echo "🧠 Setting up AI-Powered Development Experience..."
echo "================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if .cursorrules exists
if [ -f ".cursorrules" ]; then
    echo "✅ AI guidance system already configured (.cursorrules found)"
else
    echo "⚠️  Warning: .cursorrules not found - AI guidance may not work optimally"
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local for AI guidance configuration..."
    cat > .env.local << 'EOF'
# AI Guidance Configuration (Optional)
ENABLE_AI_GUIDANCE=true
AI_GUIDANCE_LEVEL=medium
ENABLE_FEATURE_DISCOVERY=true

# Development Settings
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
    echo "✅ Created .env.local with AI guidance settings"
else
    echo "✅ .env.local already exists"
fi

# Verify key files exist
echo ""
echo "🔍 Verifying template setup..."

checks=(
    "docs/DEVELOPER_ONBOARDING.md:Developer onboarding guide"
    "docs/REFERENCE.md:Complete reference guide"
    "docs/AI_PROMPTING_EXAMPLES.md:AI prompting examples"
    "docs/ai-agents/smart-guidance-implementation.md:Smart guidance system"
    "src/components/examples:Live component examples"
    "__tests__:Testing examples"
    "scripts/quality:Quality automation tools"
)

for check in "${checks[@]}"; do
    file="${check%%:*}"
    desc="${check##*:}"
    
    if [ -e "$file" ]; then
        echo "✅ $desc"
    else
        echo "❌ Missing: $desc ($file)"
    fi
done

echo ""
echo "🚀 AI Development Experience Ready!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Open your project in Cursor"
echo "2. Start development: npm run dev"
echo "3. Visit http://localhost:3000 for interactive demo"
echo "4. Try asking AI: 'What template features should I consider for this component?'"
echo ""
echo "📚 Resources:"
echo "• Complete guide: docs/DEVELOPER_ONBOARDING.md"
echo "• Complete reference: docs/REFERENCE.md"
echo "• AI examples: docs/AI_PROMPTING_EXAMPLES.md"
echo ""
echo "💡 Pro tip: Ask AI about any file you're working on for contextual suggestions!"

# Optional: Open the onboarding guide
if command -v code >/dev/null 2>&1; then
    echo ""
    echo "Opening developer onboarding guide..."
    code docs/DEVELOPER_ONBOARDING.md
fi

echo "✨ Setup complete! Happy coding with AI assistance!" 