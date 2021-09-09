# Compiles the marp deck into pdf and html

# This command only works if you have marp-cli: npm install -g @marp-team/marp-cli
# Optional: chrome/chromium in your system for the PDF
MARP=marp
# This command needs marp-cli from docker: docker pull marpteam/marp-cli
#MARP=docker run --rm --init -v "$(PWD)":/home/marp/app/ marpteam/marp-cli

# You can overwrite these from the command line
# For example: make -e THEME=marp-viu
THEME=marp-incide
THEME_SET=themes

# Convert all .md files in current directory
SRCS=$(shell find . -name '*.md')
OBJS=$(patsubst %.md,%.html,$(SRCS))

all: $(OBJS)

%.pdf: %.md
	$(MARP) "$<" -o "$@" --no-config --theme $(THEME) --theme-set "$(THEME_SET)" --pdf --allow-local-files

%.html: %.md
	$(MARP) "$<" -o "$@" --no-config --theme $(THEME) --theme-set "$(THEME_SET)" --bespoke.progress true --html
	#--bespoke.transition

clean:
	/bin/rm -rf *.html *.pdf

.PHONY: all clean
