const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApiData } from '../lib';

const adapter = new FileSync('data/equipset.json')
const db = low(adapter)

const importEquipsets = async () => {
  console.log("Importing equipset data...")
  // Get equipset data in chunks of 500
  const equipsets = await getApiData('equipset', 500);
  db.set('equipsets', equipsets).write();
  console.log(`Imported ${equipsets.length} equipsets successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importEquipsets();
}

export default importEquipsets;