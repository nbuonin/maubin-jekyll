include *.mk

runserver:
	bundle exec jekyll serve

build:
	bundle exec jekyll build

.PHONY: runserver build
