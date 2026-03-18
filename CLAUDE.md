# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a fork/customization of the Ulixee Hero project - a TypeScript monorepo for browser automation and web scraping. The project includes Hero (web scraping library), unblocked-agent (browser automation), and related tooling for bypassing bot detection.

## Build & Development Commands

```bash
# Install dependencies (uses Bun workspaces)
bun install

# Run a TypeScript file directly
bun run <file.ts>

# Lint with Biome
bunx biome check .
bunx biome check --write .  # auto-fix

# Format with Biome
bunx biome format --write .

# Run tests in a specific package
cd apps/ulixee/hero-core && bun test

# Run a single test file
cd apps/ulixee/hero-core && bun test test/basic.test.ts
```

## Workspace Structure

The monorepo uses Bun workspaces with these main areas:

- **apps/ulixee/** - Core Ulixee packages
  - `hero` - Client interface for Hero
  - `hero-core` - Core browser automation engine
  - `hero-interfaces` - Shared TypeScript interfaces
  - `unblocked-agent` - Browser automation layer
  - `unblocked-agent-mitm` - MITM proxy for browser traffic
  - `chrome-versions` - Chrome version management
  - `commons` - Shared utilities
- **apps/datastore/** - Datastore packages for deployable scraping APIs
- **apps/platform/** - Cloud platform, CLI, and SQL engine
- **apps/testing/** - Testing utilities (`hero-testing`, `unblocked-agent-testing`)
- **apps/double-agent-*/** - Browser fingerprint detection tools

## Key Architecture

### Hero Core (`apps/ulixee/hero-core`)
The main orchestration layer. Key exports from `index.ts`:
- `HeroCore` class - manages browser pools, connections, sessions
- `Session` - individual browser session
- `Tab` - browser tab management

### Hero Client (`apps/ulixee/hero`)
User-facing API. Uses awaited-dom pattern for async DOM interaction.

### Unblocked Agent
Lower-level browser automation using Chrome DevTools Protocol. Handles:
- Browser context management
- Request interception (MITM)
- Human emulation
- Browser fingerprint spoofing

### Plugin System
Uses `PluginTypes` enum and `ICorePluginClass` interfaces. Plugins are loaded via:
- `extractPlugins()` - from provided classes
- `requirePlugins()` - dynamic loading by name

### Testing Pattern
Tests use Jest-style patterns with `@ulixee/hero-testing` helpers:
```typescript
import { Helpers } from '@ulixee/hero-testing/index';
afterEach(Helpers.afterEach);
afterAll(Helpers.afterAll);
```

## Code Style

- Tabs for indentation (Biome config)
- Double quotes for strings
- Organize imports on save (Biome assist)
- TypeScript with strict mode enabled

## Important Files

- `bunfig.toml` - Bun configuration (test root is `./__tests__`)
- `biome.json` - Linting/formatting rules
- `tsconfig.json` - TypeScript base config (ESNext, bundler moduleResolution)
