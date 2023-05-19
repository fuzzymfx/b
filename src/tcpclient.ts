import { Torrent } from './bencodeparser';
import { createWriteStream, existsSync, mkdirSync } from 'fs';

if (!existsSync('./downloads')) {
    mkdirSync('./downloads');
}

export async function downloadMagnet(magnet: Torrent): Promise<void> {
    console.log(magnet)   
}
export async function downloadFile(file: any): Promise<void> {
    console.log(file)   
}


// check if file exists
// if not, create it
// download file
// update progress bar
// update status
// update speed
// update ETA
// update peers
// update seeds
// update ratio
// update size
// update downloaded
// update uploaded
// update time remaining
// update time elapsed
