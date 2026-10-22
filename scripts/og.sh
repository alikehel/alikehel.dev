#!/bin/sh
# Renders scripts/og.html into public/og.jpg (1200 by 630) with headless Chrome.
# Usage: scripts/og.sh
set -eu

cd "$(dirname "$0")/.."
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
png="$(mktemp -t og).png"

"$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1200,630 --screenshot="$png" "file://$PWD/scripts/og.html" 2>/dev/null

if command -v magick >/dev/null; then
    magick "$png" -quality 90 public/og.jpg
else
    sips -s format jpeg -s formatOptions 90 "$png" --out public/og.jpg >/dev/null
fi
rm -f "$png"
echo "wrote public/og.jpg"
