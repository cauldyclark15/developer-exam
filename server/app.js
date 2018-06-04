import express from 'express';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => console.log(`App running at ${PORT}`));
