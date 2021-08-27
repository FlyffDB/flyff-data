const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApiData } from '../lib';

const adapter = new FileSync('data/npc.json')
const db = low(adapter)

const importNPCs = async () => {
  console.log("Importing npc data...")
  // Get npc data in chunks of 500
  const npcs = await getApiData('npc', 500);
  db.set('npcs', npcs).write();
  console.log(`Imported ${npcs.length} npcs successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importNPCs();
}

export default importNPCs;