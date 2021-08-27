const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApiData } from '../lib';

const adapter = new FileSync('data/item.json')
const db = low(adapter)

const importItems = async () => {
  console.log("Importing item data...")
  // Get item data in chunks of 500
  const items = await getApiData('item', 500);
  db.set('items', items).write();
  console.log(`Imported ${items.length} items successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importItems();
}

export default importItems;