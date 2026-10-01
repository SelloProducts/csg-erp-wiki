#!/bin/sh
set -eu

cd "$(dirname "$0")"

if [ ! -x ".venv/bin/mkdocs" ]; then
  python3 -m venv .venv
  .venv/bin/python -m pip install --upgrade pip
  .venv/bin/python -m pip install -r requirements.txt
fi

exec .venv/bin/mkdocs serve -a 127.0.0.1:8000
