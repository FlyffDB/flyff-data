import { importClasses, importNPCs, importWorlds } from './scripts';

const main = async () => {
  await importClasses();
  await importNPCs();
  await importWorlds();
}

main();