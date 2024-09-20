const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/items', async (req, res) => {
  const searchTerm = req.query.search;  
  try {
    console.log('Recibiendo solicitud en /api/items');
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.get('/api/items/:id', async (req, res) => {
  const itemId = req.params.id;  
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${itemId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching item details:', error);
    res.status(500).json({ error: 'Error fetching item details' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});