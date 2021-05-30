const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();

var port = process.env.PORT || 3080;
app.listen(port, function () {
  console.log('App now running on port', port);
});

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(express.json({ limit: '16mb' }));
app.use(
  express.urlencoded({
    extended: true,
    limit: '16mb',
  })
);

app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});
