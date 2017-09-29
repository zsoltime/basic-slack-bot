'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port, () => {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});

app.get('/', (req, res) => {
  res.send('It is working...');
});

app.post('/', (req, res) => {
  res.json({
    response_type: 'ephemeral', // in_channel
    attachments: [
      {
        color: '#74AAD8',
        fields: [
          {
            title: 'Project',
            value: 'Awesome Project',
            short: true,
          },
          {
            title: 'Environment',
            value: 'Development',
            short: true,
          },
        ],
        image_url: `https://unsplash.it/900/600/?random=${Math.random()}`,
        pretext: JSON.stringify(req.body, null, 2),
        text: 'Here is a lovely image',
      },
    ],
  });
});
