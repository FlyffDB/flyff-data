const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApi } from '../lib';

const adapter = new FileSync('data/npc.json')
const db = low(adapter)

const importNPCs = async () => {
  console.log("Importing npc data...")
  const { data: npcIdsResponse } = await getApi('npc');
  // Convert npcIds into query strings with a length of 20 
  let groupedIds = [];
  for (let i = 0; i < npcIdsResponse.length; i += 20) {
    let slicedResponse = npcIdsResponse.slice(i, i + 20);
    if (slicedResponse.length > 0) groupedIds.push(slicedResponse.reduce((acc, current) => acc += `,${current}`));
  }
  // Grab npc data in chunks of 20
  let npcs = [];
  for (let npcIds of groupedIds) {
    const { data: currentNpcs} = await getApi(`npc/${npcIds}`);
    npcs = npcs.concat(currentNpcs);
  }

  db.set('npcs', npcs).write();
  console.log(`Imported ${npcs.length} npcs successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importNPCs();
}

export default importNPCs;