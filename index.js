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