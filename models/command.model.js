
const fs = require('fs');
const path = require('path');

const outboxFilePath = path.join(__dirname, '../public/outbox.json');

let outgoingData = {
  outgoing: []
};


const CommModel = {
  setComm: (req) => {
      fs.writeFileSync(outboxFilePath, JSON.stringify(req, null, 2), 'utf8');

}
}
module.exports = CommModel;
