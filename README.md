A project to document how to use Marp and RevealJS using examples.

Use to store themes and Makefiles

# Marp

Live example: <https://juanvvc.github.io/markdown-slides/marp-tutorial.html>

Since this is my preferred system, Marp themes and examples are much more
developed than RevealJS

Install:

```
npm install -g @marp-team/marp-cli
# optionally, install Chrome/Chromium for PDF/PPTX support
# If Chrome/Chromium is not in the system, the only
# available output is HTML
```

Usage:

```
make -e THEME=marp-incide marp-tutorial.md
```

Check the Makefile for additional examples

# RevealJS

These themes are much less developed than Marp themes and examples, it is just
a test
