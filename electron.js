const { app, BrowserWindow } = require('electron')

// electron main
console.log(process.versions);

const PORT = 

app.on("ready", function () {
  var mainWindow = new BrowserWindow({
    show: true,
    height: 720,
    width: 1280,
    minHeight: 720,
    minWidth: 1280,
    backgroundColor: 'black',
    fullscreenable: true,
    center: true,
    useContentSize: true,
    title: 'jangarong.github.io'
  });
  // mainWindow.setAspectRatio(16/9)
  mainWindow.loadURL("http://localhost:" + PORT + "/index.html");
  mainWindow.webContents.once("did-finish-load", function () {



    // Webserver!
    const http = require("http");
    const path = require('path');
    const fs = require('fs');

    const server = http.createServer(function (req, res) {

      // url parsing
      let resourcePath = req.url
      if (req.url.length == 0 || req.url[req.url.length - 1] == "/") {
        resourcePath += "index.html"
      }
      else if (!resourcePath.includes(".")) {
        resourcePath += ".html"
      }
      resourcePath = resourcePath.replaceAll("%20", " ")
      const filePath = path.join(__dirname, 'out', resourcePath);
      console.log(filePath)

      // read the file
      fs.readFile(filePath, function (err, data) {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end("404 Not Found");
        }

        // add wasm header when necessary
        if (filePath.includes(".wasm")) {
          res.writeHead(200, { 'Content-Type': 'application/wasm' })
        } else {
          res.writeHead(200);
        }

        // send!
        res.end(data);
      });
    });
    server.listen(PORT);
    console.log("http://localhost:" + PORT);




  });
});
