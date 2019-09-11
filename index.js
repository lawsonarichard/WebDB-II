const server = require("./server.js");
const db = require("./data/dbConfig");
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
