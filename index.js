// require express
const express = require('express');
// require helmet
const helmet = require('helmet');
// require logger
const logger = require('morgan');
// require cors
const cors = require('cors');
// set port variable
const port = 8000 || process.env.port ;

// initialize server, add middle-ware
const server = express();

// import login route
// import logout route
// import register route

server.use(helmet(),
           cors(), 
           express.json(),
           logger('dev')
           );

server.get();

server.post();

server.delete();

server.put();

server.listen(port, () => {
  console.log(`Server running live on ${port}`)
})