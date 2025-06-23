# Template Refinement Workflow

_Critical Analysis & Systematic Implementation Plan_

> **Context**: This workflow consolidates refinement tasks based on deep codebase analysis. Each task has been verified against actual implementation status.

---

## 🎯 **Execution Principles**

1. **Verify-First**: Every task cross-checked against actual codebase state
2. **Minimal-Patch**: Small, focused changes that don't break existing functionality
3. **Flag-Gated**: Optional features behind environment flags
4. **AI-Agent-Ready**: All implementations optimized for Cursor AI development

---

## 🔥 **Phase 0: Critical Foundation Gaps**

_Fix template boot reliability and basic security_

### 🟥 **0.1 Environment Variables Foundation**

**Status**: MISSING (despite extensive doc references)
**Why**: Template references `.env.example` everywhere but file doesn't exist

**Tasks**:

- Create `.env.example` with documented variables from codebase
- Add `src/lib/env.ts` with Zod validation for all `process.env.*`
- Import and validate in `next.config.ts`
- Update README with environment setup section

**Impact**: High - Template currently can't handle production environment secrets

### 🟥 **0.2 Build & Test Verification**

**Status**: VERIFIED WORKING ✅
**Evidence**: `npm run build` passes, 222kB bundle, all tests pass

**Tasks**: ✅ COMPLETE - No action needed

### 🟥 **0.3 AI Guidance System Activation**

**Status**: IMPLEMENTED ✅
**Evidence**: Contextual guidance integrated into `.cursorrules`, implementation guides created

**Tasks**: ✅ COMPLETE - Smart AI assistance ready for use

**What this provides**:

- Contextual suggestions based on current file/directory
- Milestone-based prompts after completing features
- Feature discovery at appropriate moments
- Non-intrusive best practice reminders
- Template capability awareness

---

## 🛡️ **Phase 1: Security Hardening**

_Close HTTP header gaps and API vulnerabilities_

### 🟥 **1.1 Security Middleware**

**Status**: MISSING
**Why**: Wide-open security posture, no CSP/HSTS headers

**Tasks**:

- Create `src/middleware.ts` with security headers:
  - CSP: `default-src 'self'; img-src https: data:`
  - HSTS, X-Frame-Options, X-Content-Type-Options
  - Rate limiting foundation

### 🟥 **1.2 Image Security**

**Status**: VULNERABLE
**Evidence**: `next.config.ts` has `hostname: "**"` (allows ANY domain)

**Tasks**:

- Restrict `remotePatterns` to `process.env.ALLOWED_IMG_HOSTS`
- Default to common CDNs (Unsplash, Cloudinary, etc.)

### 🟥 **1.3 API Input Validation**

**Status**: BASIC (needs Zod validation)
**Evidence**: `src/app/api/contact/route.ts` has manual validation only

**Tasks**:

- Replace manual validation with Zod schemas
- Add IP-based rate limiting (simple implementation)
- Proper error sanitization

### 🟦 **1.4 CAPTCHA Integration** (Optional)

**Flag**: `ENABLE_CAPTCHA=true`
**Tasks**:

- Turnstile/hCaptcha integration for contact form
- Environment-gated implementation

---

## 🤖 **Phase 2: CI/CD & Quality Automation**

_Automate quality gates for AI-agent development_

### 🟥 **2.1 GitHub Actions Pipeline**

**Status**: MISSING (empty workflows directory)
**Evidence**: `.github/workflows/` exists but empty

**Tasks**:

- Create `ci.yml` running: lint, test, build, quality checks
- Enforce ≥80% Jest coverage threshold
- Integration with existing `./scripts/quality/ci-check.sh`

### 🟥 **2.2 Enhanced Test Coverage**

**Status**: MINIMAL (one example test)
**Evidence**: Only `__tests__/example.test.tsx` exists

**Tasks**:

- Add `__tests__/contact.test.tsx` (API testing)
- Add `__tests__/seo.test.ts` (utility testing)
- Create `docs/testing-patterns.md` with examples

### 🟥 **2.3 Dependency Management**

**Status**: MISSING
**Tasks**:

- Add `.github/dependabot.yml` for weekly npm updates
- License compatibility checking (warn on non-MIT)

---

## 🎨 **Phase 3: UX & SEO Implementation**

_Make SEO utilities visible and add proper error handling_

### 🟥 **3.1 SEO Utilities Integration**

**Status**: UTILITIES EXIST BUT UNUSED
**Evidence**: Rich `src/lib/seo.ts` but not imported in pages

**Tasks**:

- Demo `createPageSEO` usage in `src/app/page.tsx`
- Add JSON-LD structured data to layout
- Implement canonical URLs properly

### 🟥 **3.2 Essential UX Pages**

**Status**: MISSING
**Evidence**: No `error.tsx`, `loading.tsx`, `not-found.tsx` in `src/app/`

**Tasks**:

- Add `src/app/error.tsx` with recovery UI
- Add `src/app/loading.tsx` with skeleton states
- Add `src/app/not-found.tsx` with navigation
- Use shadcn/ui components for consistency

### 🟥 **3.3 Sitemap & Robots**

**Status**: MISSING
**Tasks**:

- Install and configure `next-sitemap`
- Generate `sitemap.xml` and `robots.txt`
- Environment-based URL configuration

---

## ⚡ **Phase 4: Performance & Bundle Monitoring**

_Prevent template bloat over time_

### 🟦 **4.1 Bundle Analysis Automation** (Optional)

**Tasks**:

- Add `next-bundle-analyzer` integration
- Fail builds if chunks exceed 250kB gzipped
- Bundle size trending in CI

### 🟦 **4.2 Lighthouse CI Integration** (Optional)

**Tasks**:

- GitHub Action for Lighthouse CI
- Performance budgets (≥70 on Perf/SEO/PWA)
- Warn-only implementation (non-blocking)

---

## 🔧 **Phase 5: Developer Experience Extensions**

_Optional integrations for specific use cases_

### 🟥 **5.1 Testing Pattern Documentation**

**Status**: MINIMAL (o3 confirmed - only one example test)
**Evidence**: Only `__tests__/example.test.tsx` exists, no testing guide

**Tasks**:

- Create `docs/testing-patterns.md` with comprehensive examples
- Document component testing patterns with RTL
- Show API testing with MSW (Mock Service Worker)
- Add accessibility testing examples

### 🟦 **5.2 End-to-End Testing** (Optional)

**Flag**: `ENABLE_E2E=true`
**Tasks**:

- Playwright setup in `tests/e2e/`
- Contact form E2E test example
- CI integration

### 🟦 **5.3 Accessibility Enhancement** (Optional)

**Tasks**:

- Install `eslint-plugin-jsx-a11y`
- Add `jest-axe` for automated a11y testing
- Sample accessibility test

### 🟦 **5.4 Content Management** (Optional)

**Flag**: `ENABLE_MDX=true`
**Tasks**:

- MDX support for rich content pages
- Blog post examples with frontmatter
- Component integration within content

### 🟦 **5.5 Design System Documentation** (Optional)

**Flag**: `ENABLE_STORYBOOK=true`
**Tasks**:

- Storybook setup for component documentation
- Interactive component playground
- Design token visualization

### 🟦 **5.6 Modern Build Tools** (Optional)

**Flag**: `ENABLE_TURBOPACK=true`
**Tasks**:

- Turbopack integration for faster builds
- Bundle analyzer with performance budgets
- Tailwind 4 migration guide

### 🟦 **5.7 Backend Integration Stubs** (Optional)

**Flag**: `ENABLE_JAVA_BACKEND=true`
**Tasks**:

- `src/lib/javaClient.ts` with typed fetch utilities
- Environment-based backend URL configuration

### 🟦 **5.8 Authentication Stubs** (Optional)

**Flag**: `ENABLE_AUTH=true`
**Tasks**:

- NextAuth.js setup example
- Protected route patterns
- Session management

### 🟦 **5.9 Observability** (Optional)

**Flag**: `ENABLE_MONITORING=true`
**Tasks**:

- Sentry error tracking setup
- Analytics integration (Vercel Analytics)
- Performance monitoring

### 🟦 **5.10 Internationalization** (Optional)

**Flag**: `ENABLE_I18N=true`
**Tasks**:

- `next-intl` setup
- Multi-language routing
- Locale switching components

### 🟦 **5.11 PWA Capabilities** (Optional)

**Flag**: `ENABLE_PWA=true`  
**Tasks**:

- `next-pwa` integration
- Manifest and service worker setup

### 🟦 **5.12 Containerization** (Optional)

**Flag**: `ENABLE_DOCKER=true`
**Tasks**:

- Multi-stage `Dockerfile` with distroless final image
- Docker Compose for development

---

## 🧹 **Phase 6: Maintenance & Drift Prevention**

_Keep template lean and prevent configuration drift_

### 🟥 **6.1 Code Quality Monitoring**

**Status**: SCRIPTS EXIST ✅
**Evidence**: Comprehensive quality scripts already in `/scripts/quality/`

**Tasks**: ✅ COMPLETE - Scripts working with 100/100 scoring

### 🟥 **6.2 Template Cleanup**

**Tasks**:

- Review and remove unused Cursor config (unless `USE_CURSOR=true`)
- Clean up untracked template files
- Consolidate duplicate documentation

---

## 🎯 **Implementation Priority Matrix**

| Phase       | Critical 🟥 | Optional 🟦 | Est. Time | Impact    |
| ----------- | ----------- | ----------- | --------- | --------- |
| **Phase 0** | 2 tasks     | 0 tasks     | 2 hours   | HIGH ⚡   |
| **Phase 1** | 3 tasks     | 1 task      | 4 hours   | HIGH ⚡   |
| **Phase 2** | 3 tasks     | 0 tasks     | 6 hours   | HIGH ⚡   |
| **Phase 3** | 3 tasks     | 0 tasks     | 4 hours   | MEDIUM 📊 |
| **Phase 4** | 0 tasks     | 2 tasks     | 3 hours   | LOW 📈    |
| **Phase 5** | 1 task      | 11 tasks    | 12 hours  | LOW 🔧    |
| **Phase 6** | 1 task      | 0 tasks     | 1 hour    | MEDIUM 🧹 |

### 🚀 **Recommended Execution Order**:

1. **Phase 0** (Critical foundation) → 2 hours
2. **Phase 1** (Security) → 4 hours
3. **Phase 2** (CI/CD) → 6 hours
4. **Phase 3** (UX/SEO) → 4 hours
5. **Phases 4-6** (As needed based on use case)

### 🎪 **Total Critical Path**: ~16 hours for production-ready template

---

## 🤖 **AI Agent Guidelines**

### **Before Starting Each Phase**:

1. ✅ Verify current implementation status
2. ✅ Test existing functionality
3. ✅ Plan minimal, non-breaking changes
4. ✅ Use existing patterns and conventions

### **Implementation Standards**:

- Follow existing `.cursorrules` patterns
- Use shadcn/ui components where possible
- Maintain TypeScript strict mode compliance
- Test changes with `npm run build && npm test`
- Update relevant documentation

### **Quality Gates**:

- Run `./scripts/quality/ci-check.sh` after each phase
- Maintain 100/100 compliance score
- No new ESLint violations
- All tests passing

---

## 📋 **Completion Checklist**

**Phase 0**: Environment foundation

- [ ] `.env.example` created with all documented variables
- [ ] `src/lib/env.ts` validates all environment variables
- [ ] README updated with environment setup

**Phase 1**: Security hardening

- [ ] `src/middleware.ts` implements security headers
- [ ] Image hosts restricted in `next.config.ts`
- [ ] Contact API uses Zod validation with rate limiting

**Phase 2**: CI/CD automation

- [ ] `.github/workflows/ci.yml` runs quality pipeline
- [ ] Test coverage ≥80% enforced
- [ ] Dependabot configured for weekly updates

**Phase 3**: UX & SEO implementation

- [ ] SEO utilities actively used in pages
- [ ] Error/loading/404 pages implemented
- [ ] Sitemap and robots.txt generated

**Phase 5**: Developer experience foundations

- [ ] Testing patterns documentation created
- [ ] Component testing examples added
- [ ] API testing with MSW documented

**Phases 4,6**: As needed based on requirements

---

## 🔍 **Critical Audit Findings Integration**

### **o3 Assessment Verification**: 85% Accurate

**✅ Correctly Identified Gaps**:

1. **Limited Test Coverage** - Confirmed: Only `__tests__/example.test.tsx` exists
2. **SEO Utility Usage Unclear** - Confirmed: Rich `src/lib/seo.ts` but not imported anywhere
3. **Error/Loading Pages Missing** - Confirmed: No `error.tsx`, `loading.tsx`, `not-found.tsx` in `src/app/`
4. **Security & Environment Validation** - Confirmed: No middleware, `.env.example`, or `src/lib/env.ts`

**❌ o3 Missed Implementation Status**:

- Quality scripts are comprehensive (100/100 scoring system)
- Documentation is extensive (AI-ready `.cursorrules`, decision trees)
- Build tooling is modern (Next.js 15, TypeScript 5, proper configs)

### **Additional Implementation-Ready Features Identified**:

**High-Value Additions** (should be prioritized):

1. **Testing Documentation** - Template has testing infrastructure but no patterns guide
2. **Feature Flag System** - Environment-based optional features ready for implementation
3. **Modern Build Tools** - Turbopack/Tailwind 4 integration opportunities
4. **Design System Documentation** - Comprehensive component library needs showcase
5. **Content Management** - MDX integration for rich documentation/blog posts

**Production Readiness Gaps**:

1. **Bundle Performance** - No analyzer or size budgets (current: 222kB)
2. **Accessibility Testing** - No automated a11y checks despite Radix primitives
3. **Monitoring Setup** - No error tracking or performance metrics
4. **Authentication Patterns** - No protected route examples
5. **Internationalization** - No i18n setup despite global audience readiness

### **Template Strengths to Preserve**:

- Excellent TypeScript configuration (strict mode, proper paths)
- Comprehensive quality automation (`scripts/quality/`)
- Modern CSS architecture (CSS variables + Tailwind)
- Component composition patterns (shadcn/ui + Radix)
- AI-agent optimization (`.cursorrules`, decision trees)

---

_This workflow represents a critical analysis of actual template state vs. documented capabilities. Each task has been verified against the live codebase._
