#!/usr/bin/env python3
"""pdftext.py <pdf>  ->  one line per page: "<page>\t<text with whitespace collapsed>" (replaces the macOS PDFKit tool)."""
import sys
import pymupdf as fitz
for i, p in enumerate(fitz.open(sys.argv[1])):
    print('%d\t%s' % (i + 1, ' '.join(p.get_text().split())))
