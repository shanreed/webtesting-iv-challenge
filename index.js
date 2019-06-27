require('dotenv').config();

const server = require('./api/server.js');

//if there is a variable called port use it if not use port 5000
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));