#!/bin/sh
PATH=/usr/local/bin:/usr/bin:/bin
case "$1" in
doc)	go $@ | less -F;;
*)	go $@;;
esac
