import express from 'express';
import React from 'react'
import { renderToString } from 'react-dom/server';
import App from './client/App';
import template from './client/template';
import { ServerStyleSheet } from 'styled-components';

export function server() {
    const app = express();
    app.use('/assets', express.static('assets')); // to make files server under url this url
    app.get('/', function (req, res) {
        const sheet = new ServerStyleSheet();
        const body = renderToString(sheet.collectStyles(<App />));
        const styleTags = sheet.getStyleTags();
        const script = `<script src='./assets/client.js'></script>`;
        const htmlStr = template(styleTags, body, script);
        res.send(htmlStr);
    });
    app.listen(3000);
}
