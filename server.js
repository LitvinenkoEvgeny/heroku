const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

// serve our bundle
app.use(express.static(path.join(__dirname, 'dist'), {index: false}));

// send all other requests to index.html
app.get('*', (req, res) => {
    res.sendFile('src/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 5000);
