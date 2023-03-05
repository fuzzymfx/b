import downloadFile from './downloadFile.js';
import downloadMagnet from './downloadMag.js';

const arg: string = process.argv[2];
if(arg == "mag") downloadMagnet(process.argv[3]);
else if(arg == "file") downloadFile(process.argv[3]);
else{
		console.log("Invalid argument");
		process.exit(1);
}

