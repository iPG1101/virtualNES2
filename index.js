const serve = require('serve');
const server = serve(__dirname, {
	port: 80,
	ignore: ['index.js', 'package.json', 'package-lock.json']
});

console.log("Started HTTP server on port "+server.port)