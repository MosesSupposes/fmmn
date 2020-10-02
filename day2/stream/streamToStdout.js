const fs = require("fs");
const through = require("through2");

fs.createReadStream("greetz.txt")
	.pipe(toUpper())
	.pipe(process.stdout);

function toUpper() {
	return through((buf, enc, next) =>
		next(null, buf.toString().toUpperCase())
	);
}
