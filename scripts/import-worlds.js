const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApi } from '../lib';

const adapter = new FileSync('data/world.json')
const db = low(adapter)

const importWorlds = async () => {
  console.log("Importing world data...")
  // Since there are only a few worlds we can query them all at once
  const { data: worldIdsResponse } = await getApi('world');
  // Convert response into worldId param
  const worldIds = worldIdsResponse.reduce((acc, current) => acc += `,${current}`);
  const { data: worlds } = await getApi(`world/${worldIds}`);

  db.set('worlds', worlds).write();
  console.log(`Imported ${worlds.length} worlds successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importWorlds();
}

export default importWorlds;