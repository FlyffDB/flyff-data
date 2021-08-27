import { importClasses, importEquipsets, importItems, importMonsters, importNPCs, importWorlds } from './scripts';

const main = async () => {
  await importClasses();
  await importEquipsets();
  await importItems();
  await importMonsters();
  await importNPCs();
  await importWorlds();
}

main();