# Environment Variable Guide

_Complete reference for all environment variables and feature flags in the Next.js Tailwind Template_

## 🎯 Overview

This template uses environment variables for configuration and feature flags to enable optional functionality. All variables are validated with Zod schemas in `src/lib/env.ts`.

---

## 🔧 Required Variables

### **Application Configuration**

```bash
NODE_ENV=development                    # Environment: development|production|test
NEXT_PUBLIC_APP_URL=http://localhost:3000   # Public URL for metadata and links
```

---

## 🛡️ Security Configuration

### **Image Security**

```bash
ALLOWED_IMG_HOSTS=images.unsplash.com,res.cloudinary.com,avatars.githubusercontent.com
# Comma-separated list of allowed image hosts for next/image
```

### **Rate Limiting**

```bash
ENABLE_RATE_LIMITING=true              # Enable API rate limiting
RATE_LIMIT_WINDOW=900000               # Rate limit window in ms (15 min default)
RATE_LIMIT_MAX=100                     # Max requests per window
```

---

## 📧 Contact Form Configuration

```bash
CONTACT_EMAIL=contact@example.com       # Where to send contact form emails
SMTP_HOST=smtp.gmail.com               # SMTP server
SMTP_PORT=587                          # SMTP port
SMTP_USER=your-email@gmail.com         # SMTP username
SMTP_PASS=your-app-password            # SMTP password or app password
```

---

## 🎛️ Feature Flags

### **Testing & Quality**

```bash
ENABLE_E2E=false                       # Enable Playwright E2E tests
ENABLE_CAPTCHA=false                   # Enable CAPTCHA for forms
```

### **Development Tools**

```bash
ENABLE_STORYBOOK=false                 # Enable Storybook component docs
ENABLE_TURBOPACK=false                 # Use Turbopack for faster builds
USE_CURSOR=true                        # Keep Cursor AI configuration files
```

### **Content & Documentation**

```bash
ENABLE_MDX=false                       # Enable MDX for rich content pages
```

### **Integrations**

```bash
ENABLE_JAVA_BACKEND=false              # Enable Java backend integration stubs
ENABLE_AUTH=false                      # Enable authentication patterns
ENABLE_MONITORING=false                # Enable error tracking and analytics
```

### **Internationalization & PWA**

```bash
ENABLE_I18N=false                      # Enable internationalization support
ENABLE_PWA=false                       # Enable Progressive Web App features
```

### **Deployment**

```bash
ENABLE_DOCKER=false                    # Include Docker configuration
```

---

## 🔑 Production Secrets (Optional)

```bash
CAPTCHA_SITE_KEY=your-recaptcha-site-key    # reCAPTCHA site key
CAPTCHA_SECRET_KEY=your-recaptcha-secret    # reCAPTCHA secret key
SENTRY_DSN=https://...                      # Sentry error tracking DSN
DATABASE_URL=postgresql://...               # Database connection string
```

---

## 🤖 AI Agent Guidance

### **When to Use Feature Flags**

**For New Functionality:**

```bash
# Before adding new features, check if there's a flag:
if (env.ENABLE_AUTH) {
  // Add authentication-related code
}
```

**For Optional Dependencies:**

```bash
# Install optional packages only when flags are enabled:
if (env.ENABLE_STORYBOOK) {
  // npm install @storybook/nextjs
}
```

**For Environment-Specific Features:**

```bash
# Enable features based on environment:
ENABLE_MONITORING=true  # Production only
ENABLE_E2E=true        # CI/CD only
```

### **Decision Tree for AI Agents**

```
Need to add new feature?
│
├─ Check if feature flag exists
│   │
│   ├─ Flag exists → Use existing flag
│   ├─ Similar flag exists → Extend existing
│   └─ No flag → Consider adding new flag
│
└─ For major features → Always use feature flags
    │
    ├─ Add to env.ts schema
    ├─ Update .env.example
    ├─ Document in this guide
    └─ Use throughout codebase
```

### **Feature Flag Best Practices**

1. **Default to `false`** for optional features
2. **Use boolean flags** for enable/disable features
3. **Group related flags** (e.g., all auth-related features)
4. **Document behavior** when flag is enabled/disabled
5. **Remove flags** once features are stable and always-on

---

## 📋 Configuration Examples

### **Development Setup**

```bash
# .env.local
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
ENABLE_RATE_LIMITING=false
ENABLE_STORYBOOK=true
USE_CURSOR=true
```

### **Production Setup**

```bash
# .env.production
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
ENABLE_RATE_LIMITING=true
ENABLE_MONITORING=true
SENTRY_DSN=https://your-sentry-dsn
```

### **CI/CD Setup**

```bash
# CI environment
NODE_ENV=test
ENABLE_E2E=true
ENABLE_RATE_LIMITING=false
```

---

## 🔍 Troubleshooting

### **Common Issues**

**Environment Variable Not Found:**

```bash
# Check if variable is in src/lib/env.ts schema
# Add to .env.example if missing
# Restart development server after changes
```

**Feature Flag Not Working:**

```bash
# Verify flag is set to "true" (string, not boolean)
# Check if feature implementation checks the flag
# Ensure env.ts is importing the variable
```

**Type Errors:**

```bash
# All environment variables are validated with Zod
# Check src/lib/env.ts for correct types
# Boolean flags use string "true"/"false" conversion
```

---

## 🚀 Future Features

**Planned Feature Flags:**

- `ENABLE_ANALYTICS` - Google Analytics integration
- `ENABLE_CMS` - Headless CMS integration
- `ENABLE_PAYMENTS` - Payment processing
- `ENABLE_REAL_TIME` - WebSocket/real-time features

**Configuration Improvements:**

- Environment-specific .env files
- Runtime configuration validation
- Feature flag management UI
- A/B testing integration

---

**For complete type definitions, see `src/lib/env.ts`**  
**For usage examples, see existing code that uses `env` imports**
