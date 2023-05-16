import downloadFile from './downloadFile.js';
import downloadMagnet from './downloadMag.js';

const arg: string = process.argv[2];
if (arg == "mag") {
	console.log("Enter the magnet link: ");
	process.stdin.on('data', function (data) {
		const magnetUrl: string = data.toString().trim();
		downloadMagnet(magnetUrl);
	});
}
else if (arg == "file") {
	console.log("Enter the file path: ");
	process.stdin.on('data', function (data) {
		const path: string = data.toString().trim();
		downloadFile(path);
	});

}
else {
	console.log("Invalid argument: " + arg);
}
