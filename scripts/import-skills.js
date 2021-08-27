const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import { getApiData } from '../lib';

const adapter = new FileSync('data/skill.json')
const db = low(adapter)

const importSkills = async () => {
  console.log("Importing skill data...")
  // Get skill data in chunks of 500
  const skills = await getApiData('skill', 500);
  db.set('skills', skills).write();
  console.log(`Imported ${skills.length} skills successfully`);
}

// If called directly we just run the import
if (require.main === module) {
  importSkills();
}

export default importSkills;