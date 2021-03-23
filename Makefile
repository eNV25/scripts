
BINDIR := ~/bin

all: none

none:

install:
	for command in `cat scripts.list | xargs echo`; do \
	  ln -s $${PWD}/$${command} $(BINDIR)/$${command} || true ; \
	done

update:
	for command in `cat scripts.list | xargs echo`; do \
	  ln -sf $${PWD}/$${command} $(BINDIR)/$${command} || true ; \
	done

.PHONY: all none install
