#!/bin/sh
# Build the student handout PDF (two passes for page numbers, fit and font checks, README ?v= stamp).
# Works on Windows, macOS and Linux; set CHROME=/path/to/chrome if it is not found.
set -e
cd "$(dirname "$0")/.."
exec python3 tools/build-pdf.py "$@"
