const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs');
const path = require('path')

const adapter = new FileSync(path.join(__dirname, 'data/db.json'));
const db = low(adapter)

const classes = db.get('classes');
const items = db.get('items');
const monsters = db.get('monsters');
const npcs = db.get('npcs');
const worlds = db.get('worlds');

module.exports = {
  classes,
  items,
  monsters,
  npcs,
  worlds
}