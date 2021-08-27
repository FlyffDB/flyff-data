const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApiData } from '../lib';

const adapter = new FileSync('data/monster.json')
const db = low(adapter)

const importMonsters = async () => {
  console.log("Importing monster data...")
  // Get monster data in chunks of 500
  const monsters = await getApiData('monster', 500);
  db.set('monsters', monsters).write();
  console.log(`Imported ${monsters.length} monsters successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importMonsters();
}

export default importMonsters;