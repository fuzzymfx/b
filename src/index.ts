import downloadFile from './downloadFile.js';
import downloadMagnet from './downloadMag.js';

const arg: string = process.argv[2];
if (arg == "mag") {
	const magnetUrl: string = process.argv[3].toString().trim();
	downloadMagnet(magnetUrl);
}
else if (arg == "file") {
	const filepath: string = process.argv[3].toString().trim();
	downloadFile(filepath);
}
else {
	console.log("Invalid argument: " + arg);
}
