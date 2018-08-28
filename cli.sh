#!/usr/bin/env bash

if [ ! -f ./node_modules/esoftplay/bin/cli.js ]; then
	echo "'esp' command is only work inside react-native project which has \"esoftplay\" package"
else
	node ./node_modules/esoftplay/bin/cli.js $@
fi
