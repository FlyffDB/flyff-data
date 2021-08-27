import { importClasses, importItems, importMonsters, importNPCs, importWorlds } from './scripts';

const main = async () => {
  await importClasses();
  await importItems();
  await importMonsters();
  await importNPCs();
  await importWorlds();
}

main();