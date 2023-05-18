import downloadFile from './downloadFile.js';
import downloadMagnet from './downloadMag.js';
import { existsSync } from 'fs';
import { parseMagnetLink, Torrent } from './bencodeparser.js';

const arg: string = process.argv[2];

if (arg.startsWith('magnet')) {
	const magnet: Torrent = parseMagnetLink(arg);
	// downloadMagnet(arg);
}
else {
	if (existsSync(arg)) {
		// downloadFile(arg);
	}
	else if(!arg) throw new Error('No torrent file provided')
	else throw new Error('Invalid torrent file provided')
}