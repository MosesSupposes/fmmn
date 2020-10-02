const fs = require("fs");

if (require.main === module) {
	fs.createReadStream(process.argv[2]).pipe(process.stdout);
}
