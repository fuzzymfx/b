import downloadFile from './downloadFile.js';
import downloadMagnet from './downloadMag.js';
import { existsSync } from 'fs';

const arg: string = process.argv[2];

if (arg.startsWith('magnet')) {
	// downloadMagnet(arg);
	console.log('magnet link detected')

}
else {
	if (existsSync(arg)) {
		downloadFile(arg);
	}
	else if(!arg) throw new Error('No torrent file provided')
	else throw new Error('Invalid torrent file provided')
}