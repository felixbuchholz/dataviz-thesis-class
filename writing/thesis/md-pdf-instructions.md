pandoc --filter pandoc-citeproc --bibliography=thesis.bib --toc -V documentclass=report --variable classoption=twocolumn --variable papersize=letter -s thesis.md -o thesis.pdf

## Tipps

https://blog.kdheepak.com/writing-papers-with-markdown.html

With PDF files, you can specify the following additional arguments :

--latex-engine=pdflatex : latex engine
--latex-template=latex.template : latex template file
This allows you to define a template to use. By default, pandoc uses a built in template.

With html files, you can specify the following arguments:

--template=html.template : html template file
--css=cssfile.css : css file
With docx files unfortunately, you cannot specify a template (at least not at the time of writing this post).12

You can however, specify a reference-docx :

--reference-docx=reference.docx : docx for reference styles
These following arguments allow you to use citations when writing academic papers.

--filter pandoc-citeproc : filter to parse citations
--csl=CSLFILE : define a citation style sheet e.g. ieee.csl
--bibliography=BIBFILE : look for citations from a bibliography
Pandoc will find the appropriate citation from a .bib file and add it to your Bibliography according to the style sheet you specify. It works great and I’ve had no issues with it so far.

Also, I’ve found the following filters useful.

--filter pandoc-eqnos : equation numbers
--filter pandoc-fignos : figure numbers
--filter pandoc-tablenos : table numbers
They allow you reference a figure, equation or table. For example, Equation 1 is an example of a block equation in Markdown.

A paper may be generated using a command as shown below :

pandoc -s -S --latex-engine=pdflatex \
--template=./templates/ieee-latex.template \
--filter pandoc-fignos \
--filter pandoc-eqnos \
--filter pandoc-tablenos \
--filter pandoc-citeproc \
--csl=./styles/ieee.csl \
--bibliography=./bib/research.bib \
-o ieee-paper.pdf paper.md
