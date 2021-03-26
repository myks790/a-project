import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../../shared/App';
import express from 'express';
import config from './../../config'
const route = express.Router();

export default (router) => {
  router.use('/',route);

  route.get('/', (req, res) => {
   
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My SSR App</title>
            </head>
            <body>
                <div id='ssr-app'>${ReactDOMServer.renderToString(<App />)}</div>
                <script src="${config.clientBundleUrl}"></script>
            </body>
        </html>
    `);
  });
}