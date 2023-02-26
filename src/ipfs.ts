import {create} from 'ipfs-http-client';
import {config} from 'dotenv';
config();

const ipfs = create({url: process.env.IPFS_URL!})

export const cat = async (cid: string): Promise<string> => {
	const stream = ipfs.cat(cid, {timeout: 10000}); // 10s timeout
	const decoder = new TextDecoder()

	let source = '';
	for await (const chunk of stream) {
		source += decoder.decode(chunk, {stream: true});
	}

	return source;
}