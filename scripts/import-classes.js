const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApiData } from '../lib';

const adapter = new FileSync('data/class.json')
const db = low(adapter)

const importClasses = async () => {
  console.log("Importing class data...")
  // Get class data in chunks of 500
  const classes = await getApiData('class', 500);
  db.set('classes', classes).write();
  console.log(`Imported ${classes.length} classes successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importClasses();
}

export default importClasses;