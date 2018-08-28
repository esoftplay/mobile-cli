#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');

const file = './node_modules/esoftplay/bin/cli.js';
if (!fs.existsSync(file)) {
	console.log("'esp' command is only work inside react-native project which has \"esoftplay\" package")
}else{
	var result = spawn('node', [file].concat(process.argv.slice(2)));
	result.stdout.on('data', function (data) {
	  console.log(data.toString());
	});
	result.stderr.on('data', function (data) {
	  console.log('stderr: ' + data.toString());
	});
}