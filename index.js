const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs');
const path = require('path')

const adapter = new FileSync(path.join(__dirname, 'db.json'));
const db = low(adapter)

const classes = db.get('classes');
const npcs = db.get('npcs');

module.exports = {
  classes,
  npcs
}