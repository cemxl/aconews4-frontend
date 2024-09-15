import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiUrl = 'https://gnews.io/api/v4/search?q=technology&apikey=7986ef8a1e1c09e77ada4e61947fa257';

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public')));

// Endpoint to fetch news
app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Error fetching news');
  }
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
