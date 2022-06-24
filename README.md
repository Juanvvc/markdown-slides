A project to document how to use Marp, and themes examples

Use to store themes and Makefiles

Live example: <https://juanvvc.github.io/markdown-slides/marp-tutorial.html>

# Install

```
npm install -g @marp-team/marp-cli
# optionally, install Chrome/Chromium for PDF/PPTX support
# If Chrome/Chromium is not in the system, the only
# available output is HTML
```

# Build

```
make
```

# Use in your projects

```
git submodule add https://github.com/Juanvvc/markdown-slides.git
git submodule init
git submodule update
```

Configure VSCode to read themes from `markdown-slides/slides/themes`


