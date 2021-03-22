const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApi } from '../lib';

const adapter = new FileSync('db.json')
const db = low(adapter)

const importClasses = async () => {
  console.log("Importing class data...")
  // Since there are only a few classes we can query them all at once
  const { data: classIdsResponse } = await getApi('class');
  // Convert response into classId param
  const classIds = classIdsResponse.reduce((acc, current) => acc += `,${current}`);
  const { data: classes } = await getApi(`class/${classIds}`);

  db.set('classes', classes).write();
  console.log(`Imported ${classes.length} class images successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importClasses();
}

export default importClasses;