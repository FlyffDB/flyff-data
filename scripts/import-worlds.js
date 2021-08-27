const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApiData } from '../lib';

const adapter = new FileSync('data/world.json')
const db = low(adapter)

const importWorlds = async () => {
  console.log("Importing world data...")
  // Get world data in chunks of 500
  const worlds = await getApiData('world', 500);
  db.set('worlds', worlds).write();
  console.log(`Imported ${worlds.length} worlds successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importWorlds();
}

export default importWorlds;