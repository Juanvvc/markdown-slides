
from __future__ import annotations 
import sys
import os
import shutil
import re
import tempfile


def get_sections(inputfilename: str, level: int = 2) -> dict:
    """
    Get the name of the sections in a file

    A section always start with a slide with class 'lead'

    Returns:
        A dictionary. Keys are the section title, value the slide number
    """
    slide_number = 0
    sections = dict()
    first_line = True
    ignore_section = False
    with open(inputfilename, 'r', encoding='utf-8') as f:
        for line in f.readlines():
            line = line.strip()
            # manage yaml
            if first_line:
                if line == '---' or line == '~~~':
                    ignore_section = True
                first_line = False
                continue
            # ignore sections yaml and ``` to count slides
            if ignore_section:
                if line == '---' or line == '~~~' or line == '```':
                    ignore_section = False
                continue
            if line.startswith('```'):
                ignore_section = True
                continue
            
            if is_slide(line, level=level):
                slide_number += 1
                slide_title = line.replace('#', '').strip()
            if  re.search(r'_class:.*lead', line):
                sections[slide_title] = slide_number
    return sections


def build_toc(sections: dict) -> list[str]:
    """
    Params:
        - sections: a dictionary, as returned by get_sections()

    Returns:
        A markdown list of references
    """
    for title in sections.keys():
        yield f'1. [{title}](#{sections[title]})\n'


def is_slide(line: str, level: int = 2) -> bool:
    """
    Params:
        - level: headers with his level mark a slide. level>2 are not supported
    
    Returns:
        True if the line marks a new slide
    """
    if level == 2:
        return line.startswith('# ') or line.startswith('## ') or line.startswith('---')
    if level == 1:
        return line.startswith('# ') or line.startswith('## ') or line.startswith('---')
    return line.startswith('---')


def scan_file(inputfile: str, level: int = 2) -> str:
    """ Scans a file for a TOC slide, and create a new file with the right TOC
    
    Returns:
        The name of the output file. Warning: it is a temporary file
    """
    sections = get_sections(inputfile, level=level)
    outputfile = tempfile.NamedTemporaryFile(delete=False)
    ignoring = False
    with open(inputfile, 'r', encoding='utf-8') as fin, open(outputfile.name, 'w', encoding='utf-8') as fout:
        lines = fin.readlines()
        for line in lines:
            if re.search(r'_class:.* toc ', line):
                fout.write(line)
                fout.write('\n')
                fout.writelines(build_toc(sections))
                fout.write('\n')
                ignoring = True
            if is_slide(line, level):
                ignoring = False
            if not ignoring:
                fout.write(line)
    return outputfile.name


def update_toc_in_file(infilename: str, outfilename: str | None, level: int = 2):
    """ Updated the TOC slide in a file
    
    The TOC slide has the class toc
    
    If outfilename is None, overwrites the original file. Careful with errors!
    """
    tempfilename = scan_file(infilename, level=level)
    if outfilename is None:
        shutil.copyfile(tempfilename, infilename)
    else:
        shutil.copyfile(tempfilename, outfilename)


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Update the TOC slide')
    parser.add_argument('--input', default=None, help='The input filename. Mandatory')
    parser.add_argument('--output', default=None, help='The output filename. If not present, edit inline')
    parser.add_argument('--level', default=2, type=int, help='The value of the marp headingDivider param')
    args = parser.parse_args()

    if args.input is None:
        raise Exception('You must provide an input file')
    update_toc_in_file(args.input, outfilename=args.output, level=args.level)
