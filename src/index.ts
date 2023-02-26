import express from 'express';
import morgan from 'morgan';

export const app = express();
app.use(morgan('common'));

app.get('/ipfs/:cid', async (req, res) => {
	setTimeout(() => res.send('hi'), 1000)
})