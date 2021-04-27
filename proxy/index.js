const express = require('express');
const morgan = require("morgan");
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 8081;
const HOST = "localhost";
const API_SERVICE_URL = "https://api.linkedin.com";

// Logging
app.use(morgan('dev'));

// CORS
app.use(cors())

// Proxy endpoints
app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
 }));

 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });