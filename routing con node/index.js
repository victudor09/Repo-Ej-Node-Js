const url = require('url')

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const query = url.parse(req.url, true)
  const filename = `.${query.pathname}`
  fs.readFile(filename, (err, data) => {
    /* if(err){
        res.writeHead(404, { 'Content-Type': 'text/html' })
        console.error(err)
        return res.end('404 Not Found')
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    }
 */
    try {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      console.error(err)
      return res.end('404 Not Found')
    }
  })
})
.listen(8080)