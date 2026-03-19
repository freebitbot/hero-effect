# Research Prompt: TLS/HTTP2/TCP Fingerprinting Alternatives

## Context

I'm working on a browser automation project (fork of Ulixee Hero) and considering replacing the complex @double-agent fingerprinting system with Apify's Fingerprint Suite. However, Fingerprint Suite doesn't cover:

1. **TLS Fingerprint (JA3)** - TLS ClientHello cipher suites, extensions order
2. **HTTP/2 Settings** - SETTINGS frame, WINDOW_UPDATE, priority settings
3. **TCP Parameters** - TTL, window size, options

I need to find ready-to-use or near-ready solutions for these three areas.

---

## Research Questions

### 1. TLS Fingerprint (JA3)

**What I need:**
- Library/package that can modify TLS ClientHello parameters
- Specifically: cipher suites order, extensions order, supported versions
- Must work with Chromium-based automation (Playwright, Puppeteer, or CDP)

**Questions to research:**

1. What libraries exist for TLS fingerprint modification in browser automation context?
   - Look for: `curl-impersonate`, `tls-client`, `got-scraping`, `undici` with TLS options
   - Check if there are Node.js bindings for curl-impersonate

2. Are there Chrome/Chromium launch flags that affect TLS fingerprint?
   - `--cipher-suite-allowlist`
   - `--tls13-variant`
   - `--ssl-version-max/min`
   - Any undocumented flags?

3. Is there a way to intercept and modify TLS ClientHello via:
   - CDP (Chrome DevTools Protocol)?
   - Proxy (MITM approach)?
   - Browser extension?

4. What about these specific projects?
   - https://github.com/lwthiker/curl-impersonate
   - https://github.com/bogdanfinn/tls-client
   - https://github.com/.BotDot/tls-client (Python)
   - Any Node.js equivalents?

5. Is JA3 spoofing still relevant in 2024-2025? Do major bot detection services still use it?
   - Cloudflare
   - Akamai
   - Datadome
   - PerimeterX

### 2. HTTP/2 Fingerprint

**What I need:**
- Control over HTTP/2 SETTINGS frame parameters
- WINDOW_UPDATE values
- Priority/dependency settings
- Header compression (HPACK) settings

**Questions to research:**

1. Can HTTP/2 SETTINGS be modified in:
   - Playwright?
   - Puppeteer?
   - Via CDP?

2. Are there Chrome launch flags for HTTP/2?
   - `--enable-http2`
   - `--http2-version`
   - Any hidden flags in `chrome://flags`?

3. What HTTP/2 parameters do bot detection systems check?
   - SETTINGS_INITIAL_WINDOW_SIZE
   - SETTINGS_MAX_FRAME_SIZE
   - SETTINGS_MAX_HEADER_LIST_SIZE
   - SETTINGS_ENABLE_PUSH
   - Priority frame parameters

4. Are there known "good" HTTP/2 fingerprint values per browser version?
   - Where can I find reference data?

5. Does the order of HTTP/2 SETTINGS parameters matter for detection?

### 3. TCP Parameters

**What I need:**
- Control over TCP TTL (Time To Live)
- TCP Window size
- TCP options (MSS, window scaling, SACK, etc.)

**Questions to research:**

1. Can TCP parameters be modified from Node.js/browser automation?
   - Are these OS-level settings only?
   - Can they be set per-connection?

2. What TCP parameters do bot detection systems actually check?
   - Is TTL really used for detection (it varies by network path)?
   - TCP window size variations between browsers?

3. Are there any browser/OS combinations with distinctive TCP fingerprints?

4. Can proxy servers (like those in scraping stacks) normalize TCP fingerprints?
   - Does using a proxy make TCP fingerprinting irrelevant?

### 4. Chrome WebDriver / CDP Flags

**Specific questions:**

1. What Chrome DevTools Protocol (CDP) commands relate to network fingerprinting?
   - `Network.setUserAgentOverride` - known
   - `Network.setExtraHTTPHeaders` - known
   - Any for TLS/HTTP2/TCP?

2. Are there undocumented Chrome flags? Search for:
   - "chrome flags list tls"
   - "chromium command line switches network"
   - "chrome hidden flags fingerprinting"

3. Can `chrome://net-internals` settings be modified programmatically?

4. Does headless mode affect TLS/HTTP2/TCP fingerprint?
   - `--headless=new` vs `--headless`
   - Any differences in network behavior?

5. What's the impact of `--disable-blink-features=AutomationControlled` on network-level fingerprinting?

---

## Specific Libraries to Investigate

Please search for and evaluate these:

### TLS/JA3:
1. **curl-impersonate** - Is there a maintained Node.js binding?
2. **tls-client** (Python/Go) - Any JS port?
3. **got-scraping** - Does it support JA3 modification?
4. **undici** - HTTP/2 client, any TLS customization?
5. **node-curl-impersonate** - Is it maintained?

### HTTP/2:
1. **http2-wrapper** - Any customization options?
2. **spdy** - Can it be used for fingerprint control?

### Proxies (may solve all three):
1. **mitmproxy** - Can it modify TLS/HTTP2/TCP?
2. **browsermob-proxy** - Does it support TLS fingerprint modification?
3. **Any proxy designed for fingerprint spoofing?**

### Commercial/Open Source Solutions:
1. **Scraping browser services** - What do they use for TLS/HTTP2?
2. **Browserbase**, **Browserless**, **Bright Data** - Any published info on their approach?

---

## Success Criteria

For each solution found, please provide:

1. **Maturity level:**
   - Production ready / Beta / Experimental
   - Maintenance status (last commit, stars, issues)

2. **Integration complexity:**
   - Drop-in replacement / Requires proxy / Requires code changes

3. **Coverage:**
   - Which of TLS/HTTP2/TCP it covers
   - How complete is the spoofing

4. **Browser compatibility:**
   - Works with Chromium? Firefox? Both?
   - Requires specific browser version?

5. **Performance impact:**
   - Additional latency?
   - Memory overhead?

---

## Expected Output Format

For each category, provide:

```markdown
## [TLS/HTTP2/TCP] Solutions

### Solution Name
- **Status**: Production/Beta/Experimental
- **Coverage**: TLS JA3 / HTTP2 Settings / TCP params
- **How it works**: Brief technical description
- **Installation**: npm install / git clone / etc
- **Code example**: Working example if available
- **Pros**:
- **Cons**:
- **Verdict**: Use / Consider / Skip

### Alternative approaches (if no ready solution)
1. Approach description
2. Feasibility assessment
```

---

## Additional Context

- Project uses **Bun** runtime (not Node.js directly)
- Target browsers: **Chromium-based** primarily
- Integration target: **Playwright** or **CDP** directly
- License compatibility: MIT/Apache-2.0 preferred
- Must work on **Linux/macOS/Windows**

---

## Search Queries Suggestion

Use these search queries:

```
site:github.com tls fingerprint impersonate chromium
site:github.com ja3 spoofing nodejs
site:github.com http2 fingerprint browser
"curl-impersonate" nodejs typescript
chrome devtools protocol tls fingerprint
playwright tls fingerprint ja3
"browser fingerprint" tls http2 tcp 2024
cloudflare ja3 bypass 2024
bot detection tls fingerprint 2024
chrome flags tls cipher-suite-allowlist
chromium http2 settings modification
tcp fingerprint browser automation
```

---

## Final Question

Based on all findings:

1. **Is it worth implementing TLS/HTTP2/TCP fingerprint spoofing?**
   - How many bot detection services actually check these?
   - What percentage of sites require it?

2. **What's the minimum viable approach?**
   - Just TLS (JA3)?
   - TLS + HTTP/2?
   - All three?

3. **Should I use a proxy-based approach instead of browser-level?**
   - Pros/cons of proxy vs browser modification

4. **Are there any maintained forks of double-agent that I could use?**

---

## Resources to Check

- https://github.com/search?q=ja3+nodejs
- https://github.com/search?q=tls+fingerprint+browser
- https://github.com/nicedayworld/niceday-node-curl-impersonate
- https://github.com/ullmjednja317/chrome-tls-fingerprint
- https://source.chromium.org/ (for CDP capabilities)
- https://peter.sh/experiments/chromium-command-line-switches/
- https://bot.sannysoft.com/ (test site)
- https://tls.peet.ws/api/all (TLS test)
