const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();

//var pcpartpicker = require('./src/components/Computer/components/helper/pcpartpicker');
//const puppeteer = require('puppeteer');

var port = process.env.PORT || 3080;
app.listen(port, function () {
  console.log('App now running on port', port);
});

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

//app.get('/api/test', function (req, res) {
//  (async () => {
//    const browser = await puppeteer.launch();
//    const page = await browser.newPage();
//
//    await page.goto('https://geizhals.de/?cat=cpuamdam4', {
//      waitUntil: 'networkidle2',
//    });
//
//    //console.log(page);
//    //await new Promise((resolve) => setTimeout(resolve, 10000));
//    var innerText=
//      await page.evaluate(
//        () =>
//          document.getElementsByClassName(
//            'filtercategory__productlist-scroll-wrapper'
//          )[0].innerText
//    );
//
//    res.send(innerText);
//
//
//    await browser.close();
//  })();
//});

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
