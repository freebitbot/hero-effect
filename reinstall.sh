#!/usr/bin/env bash

find . -type d -name '*node_modules*' -exec rm -rfv {} +
rm bun.lock 2>/dev/null || true
bun --bun install --no-summary
bun pm trust --all 2>/dev/null || true

git add bun.lock
