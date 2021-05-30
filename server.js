const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});
app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(staticFileMiddleware);
const port = process.env.PORT || 80;
app.listen(port);
