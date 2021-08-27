import { importClasses, importMonsters, importNPCs, importWorlds } from './scripts';

const main = async () => {
  await importClasses();
  await importMonsters();
  await importNPCs();
  await importWorlds();
}

main();