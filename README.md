# Tutorial: presentations with Marp

A project to document how to use Marp, and a repository of themes I use in my presentations.

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
git submodule add https://github.com/Juanvvc/markdown-slides.git slides-support
git submodule init
git submodule update --remote --merge
```

Configure VSCode to read themes from `slides-support/slides/themes`, preferably in the workspace. Check the .workspace file for an example.

Check example: <https://github.com/Juanvvc/crypto>


