import { importClasses, importEquipsets, importItems, importMonsters, importNPCs, importSkills, importWorlds } from './scripts';

const main = async () => {
  await importClasses();
  await importEquipsets();
  await importItems();
  await importMonsters();
  await importNPCs();
  await importSkills();
  await importWorlds();
}

main();