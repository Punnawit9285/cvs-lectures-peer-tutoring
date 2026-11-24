#!/bin/sh
# Local copies of the web fonts in dist/fonts/ (git-ignored) so the PDF build and headless screenshots do not depend on
# reaching Google Fonts. Source: the @fontsource npm packages (same SIL OFL files Google Fonts serves).
# Writes dist/fonts/fonts.css. Fonts: Bai Jamjuree, IBM Plex Sans / Sans Thai / Mono.
set -e
cd "$(dirname "$0")/.."
[ -s dist/fonts/fonts.css ] && exit 0
mkdir -p dist/fonts
T=$(mktemp -d)
( cd "$T" && for p in bai-jamjuree ibm-plex-sans ibm-plex-sans-thai ibm-plex-mono; do npm pack -q "@fontsource/$p" >/dev/null 2>&1 && mkdir -p "$p" && tar -xzf fontsource-$p-*.tgz -C "$p"; done )
: > dist/fonts/fonts.css
face() { # family dir weight style subset
  f="$2-$5-$3-$4.woff2"; src="$T/$2/package/files/$f"
  [ -s "$src" ] || { echo "missing $f" >&2; exit 1; }
  cp "$src" "dist/fonts/$f"
  case "$5" in thai) r="U+0E01-0E5B, U+200C-200D, U+25CC";; latin-ext) r="U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF";; *) r="U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD";; esac
  printf "@font-face{font-family:'%s';font-style:%s;font-weight:%s;font-display:swap;src:url(%s) format('woff2');unicode-range:%s}\n" "$1" "$4" "$3" "$f" "$r" >> dist/fonts/fonts.css
}
for w in 500 600 700; do for s in latin latin-ext thai; do face "Bai Jamjuree" bai-jamjuree $w normal $s; done; done
for w in 400 500 600; do for s in latin latin-ext; do face "IBM Plex Sans" ibm-plex-sans $w normal $s; done; done
for s in latin latin-ext; do face "IBM Plex Sans" ibm-plex-sans 400 italic $s; done
for w in 400 500 600; do face "IBM Plex Sans Thai" ibm-plex-sans-thai $w normal thai; face "IBM Plex Sans Thai" ibm-plex-sans-thai $w normal latin; done
for w in 400 500 600; do for s in latin latin-ext; do face "IBM Plex Mono" ibm-plex-mono $w normal $s; done; done
rm -rf "$T"
echo "fonts: $(ls dist/fonts/*.woff2 | wc -l | tr -d ' ') files, $(du -sh dist/fonts | cut -f1)"
