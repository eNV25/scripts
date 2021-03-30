
BINDIR := ~/bin

CPARGS := -i

all: none

none:

install:
	for command in `cat scripts.list | xargs echo`; do \
	  cp $(CPARGS) $${PWD}/$${command} $(BINDIR)/$${command} || true; \
	done

install-force:
	@make install CPARGS=

.PHONY: all none install
