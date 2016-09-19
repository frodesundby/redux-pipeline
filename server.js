const path = require('path');
const express = require('express');
const webpack = require('webpack');

const config = require('./config')
const webpackConfig = require('./webpack.config.dev.js');
const compiler = webpack(webpackConfig);

const host = config.host || 'localhost'
const port = config.port || 4242

const serverOptions = {
    quiet: false,
    noInfo: false,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
}

const app = new express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, host, (err) => {
    if (err) {
        console.error(err);
        return
    }
    console.info('----\n==> ✅  Webpack Development server is running on %s:%s.', host, port);
});
