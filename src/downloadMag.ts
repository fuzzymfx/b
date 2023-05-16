import {
	createReadStream,
	createWriteStream,
} from "fs";
import MagnetUri from "magnet-uri";
import magnet from "magnet-uri";;

export default function downloadMagnet(magnetUrl: string) {
	console.log("Downloading magnet from path: " + magnetUrl);
	const parsed: MagnetUri.Instance = magnet(magnetUrl);
	console.log(parsed);
}