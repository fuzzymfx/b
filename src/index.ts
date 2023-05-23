import {downloadTorrent} from './tcpclient.js';
import { existsSync } from 'fs';
import { parseMagnetLink, Torrent } from './bencodeparser.js';
import downloadFile from './downloadFile.js';

const arg: string = process.argv[2];


switch (arg) {
	case '-h':
		console.log('Usage: node src/index.js [torrent file path]');
		console.log('Usage: node src/index.js [magnet link]');
		break;
	case '-v':
		console.log('Version: 1.0.0');
		break;	
}

if (arg.startsWith('magnet')) {
	const magnet: Torrent = parseMagnetLink(arg);
	downloadTorrent(magnet);
}
else {
	if (existsSync(arg)) {
		// const torrent: Torrent = parseMagnetLink(arg);
		// downloadTorrent(torrent);
		downloadFile(arg);
	}
	else if(!arg) throw new Error('No torrent file provided')
	else throw new Error('Invalid torrent file provided')
}