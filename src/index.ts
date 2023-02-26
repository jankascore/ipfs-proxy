import express from 'express';
import morgan from 'morgan';
import { cat } from './ipfs.js';

export const app = express();
app.use(morgan('common'));

app.get('/ipfs/:cid', async (req, res) => {
	try {
		res.send(await cat(req.params.cid))
	} catch(e) {
		console.error(e);
	}
})

app.listen(8080, () => {
	console.log('Listening on 8080');
})